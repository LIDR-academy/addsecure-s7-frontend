import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type InterviewStep = {
  id: number;
  name: string;
  orderIndex: number;
};

type Candidate = {
  fullName: string;
  currentInterviewStep: string;
  averageScore: number;
  id: number;
  applicationId: number;
};

type Toast = {
  id: number;
  message: string;
  type: 'success' | 'error';
};

// ─── Score Display ────────────────────────────────────────────────────────────

const ScoreSquares: React.FC<{ score: number }> = ({ score }) => {
  const rounded = Math.round(score);
  return (
    <div className="flex items-center gap-[3px]" aria-label={`Score: ${score} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-[10px] h-[10px] border border-black ${i < rounded ? 'bg-black' : 'bg-white'}`}
        />
      ))}
      <span className="ml-1 text-[11px] font-bold text-[#666] leading-none">
        {score > 0 ? score.toFixed(1) : '—'}
      </span>
    </div>
  );
};

// ─── Candidate Card ───────────────────────────────────────────────────────────

const CandidateCard: React.FC<{
  candidate: Candidate;
  onDragStart: (c: Candidate) => void;
  isDragging: boolean;
}> = ({ candidate, onDragStart, isDragging }) => (
  <div
    draggable
    onDragStart={() => onDragStart(candidate)}
    className={`bg-white border-2 border-black p-4 cursor-grab active:cursor-grabbing select-none transition-all ${
      isDragging ? 'opacity-40 scale-[0.97]' : 'hover:shadow-[3px_3px_0px_0px_black]'
    }`}
    role="listitem"
    aria-label={`${candidate.fullName}, score ${candidate.averageScore}`}
  >
    <p className="font-bold text-[14px] text-black leading-5 mb-2">{candidate.fullName}</p>
    <ScoreSquares score={candidate.averageScore} />
  </div>
);

// ─── Kanban Column ────────────────────────────────────────────────────────────

const KanbanColumn: React.FC<{
  step: InterviewStep;
  candidates: Candidate[];
  draggingCandidate: Candidate | null;
  onDragOver: (stepName: string) => void;
  onDragLeave: () => void;
  onDrop: (step: InterviewStep) => void;
  isDragOver: boolean;
  onDragStart: (c: Candidate) => void;
}> = ({
  step,
  candidates,
  draggingCandidate,
  onDragOver,
  onDragLeave,
  onDrop,
  isDragOver,
  onDragStart,
}) => (
  <div
    className={`flex flex-col flex-shrink-0 w-72 border-2 border-black transition-all ${
      isDragOver
        ? 'shadow-[6px_6px_0px_0px_#ffd700] border-[#ffd700]'
        : 'shadow-[4px_4px_0px_0px_black]'
    }`}
    onDragOver={(e) => {
      e.preventDefault();
      onDragOver(step.name);
    }}
    onDragLeave={onDragLeave}
    onDrop={(e) => {
      e.preventDefault();
      onDrop(step);
    }}
    role="list"
    aria-label={`${step.name} column`}
  >
    {/* Column Header */}
    <div
      className={`flex items-center justify-between px-4 py-3 border-b-2 border-black transition-colors ${
        isDragOver ? 'bg-[#ffd700]' : 'bg-black'
      }`}
    >
      <span
        className={`font-bold text-[12px] tracking-[0.7px] uppercase leading-5 ${
          isDragOver ? 'text-black' : 'text-white'
        }`}
      >
        {step.name}
      </span>
      <span
        className={`w-6 h-6 flex items-center justify-center font-bold text-[11px] border-2 ${
          isDragOver ? 'bg-black text-[#ffd700] border-black' : 'bg-white text-black border-white'
        }`}
      >
        {candidates.length}
      </span>
    </div>

    {/* Cards */}
    <div className="flex flex-col gap-3 p-3 flex-1 bg-[#f5f5f5] min-h-[120px]">
      {candidates.map((c) => (
        <CandidateCard
          key={c.applicationId}
          candidate={c}
          onDragStart={onDragStart}
          isDragging={draggingCandidate?.applicationId === c.applicationId}
        />
      ))}

      {candidates.length === 0 && (
        <div
          className={`flex-1 flex items-center justify-center border-2 border-dashed min-h-[80px] transition-colors ${
            isDragOver ? 'border-black bg-[#ffd700]/20' : 'border-[#ccc]'
          }`}
          aria-label="Empty column drop zone"
        >
          <span className="text-[12px] text-[#999] font-medium uppercase tracking-wider">
            Drop here
          </span>
        </div>
      )}
    </div>
  </div>
);

// ─── Toast ────────────────────────────────────────────────────────────────────

const ToastStack: React.FC<{
  toasts: Toast[];
  onDismiss: (id: number) => void;
}> = ({ toasts, onDismiss }) => (
  <div
    className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"
    aria-live="polite"
  >
    {toasts.map((t) => (
      <div
        key={t.id}
        className={`pointer-events-auto flex items-center justify-between gap-4 px-5 py-3 border-2 border-black shadow-[4px_4px_0px_0px_black] min-w-[260px] max-w-sm ${
          t.type === 'success' ? 'bg-black text-white' : 'bg-red-600 text-white'
        }`}
        role="status"
      >
        <span className="font-medium text-[13px]">{t.message}</span>
        <button
          onClick={() => onDismiss(t.id)}
          className="font-bold text-[16px] opacity-70 hover:opacity-100 leading-none"
          aria-label="Dismiss notification"
        >
          ×
        </button>
      </div>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const PositionBoard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [positionName, setPositionName] = useState('');
  const [steps, setSteps] = useState<InterviewStep[]>([]);
  const [columns, setColumns] = useState<Record<string, Candidate[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [draggingCandidate, setDraggingCandidate] = useState<Candidate | null>(null);
  const [dragOverStep, setDragOverStep] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastIdRef = useRef(0);

  const addToast = useCallback((message: string, type: 'success' | 'error') => {
    const newId = ++toastIdRef.current;
    setToasts((prev) => [...prev, { id: newId, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== newId)), 4000);
  }, []);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchAll = async () => {
      try {
        const [flowRes, candidatesRes] = await Promise.all([
          fetch(`http://localhost:3010/position/${id}/interviewflow`),
          fetch(`http://localhost:3010/position/${id}/candidates`),
        ]);

        if (!flowRes.ok) throw new Error('Failed to load interview flow');
        if (!candidatesRes.ok) throw new Error('Failed to load candidates');

        const flowData = await flowRes.json();
        const candidatesData: Candidate[] = await candidatesRes.json();

        const { positionName: name, interviewFlow } = flowData.interviewFlow;
        const sortedSteps: InterviewStep[] = [...interviewFlow.interviewSteps].sort(
          (a, b) => a.orderIndex - b.orderIndex,
        );

        setPositionName(name);
        setSteps(sortedSteps);

        const cols: Record<string, Candidate[]> = {};
        sortedSteps.forEach((s) => (cols[s.name] = []));
        candidatesData.forEach((c) => {
          if (cols[c.currentInterviewStep] !== undefined) {
            cols[c.currentInterviewStep].push(c);
          }
        });

        setColumns(cols);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [id]);

  const handleDragStart = useCallback((candidate: Candidate) => {
    setDraggingCandidate(candidate);
  }, []);

  const handleDragOver = useCallback((stepName: string) => {
    setDragOverStep(stepName);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOverStep(null);
  }, []);

  const handleDrop = useCallback(
    async (targetStep: InterviewStep) => {
      setDragOverStep(null);

      if (!draggingCandidate || draggingCandidate.currentInterviewStep === targetStep.name) {
        setDraggingCandidate(null);
        return;
      }

      const fromStep = draggingCandidate.currentInterviewStep;
      const toStep = targetStep.name;

      // Optimistic update
      setColumns((prev) => {
        const next = { ...prev };
        next[fromStep] = prev[fromStep].filter(
          (c) => c.applicationId !== draggingCandidate.applicationId,
        );
        next[toStep] = [...prev[toStep], { ...draggingCandidate, currentInterviewStep: toStep }];
        return next;
      });

      setDraggingCandidate(null);

      try {
        const res = await fetch(`http://localhost:3010/candidates/${draggingCandidate.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            applicationId: String(draggingCandidate.applicationId),
            currentInterviewStep: String(targetStep.id),
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message ?? 'Update failed');
        }

        addToast(data.message ?? 'Stage updated successfully', 'success');
      } catch (err) {
        // Revert optimistic update
        setColumns((prev) => {
          const next = { ...prev };
          next[toStep] = prev[toStep].filter(
            (c) => c.applicationId !== draggingCandidate.applicationId,
          );
          next[fromStep] = [
            ...prev[fromStep],
            { ...draggingCandidate, currentInterviewStep: fromStep },
          ];
          return next;
        });

        addToast(err instanceof Error ? err.message : 'Failed to update stage', 'error');
      }
    },
    [draggingCandidate, addToast],
  );

  const handleGlobalDragEnd = useCallback(() => {
    setDraggingCandidate(null);
    setDragOverStep(null);
  }, []);

  return (
    <div className="flex flex-col h-full" onDragEnd={handleGlobalDragEnd}>
      {/* Page Header */}
      <header className="bg-white border-b-2 border-black px-8 py-5 flex items-center justify-between flex-shrink-0">
        <div className="flex flex-col gap-1">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center text-[14px]">
              <li>
                <Link to="/" className="text-[#666]">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#666] mx-2">/</span>
                <Link to="/positions" className="text-[#666]">
                  Positions
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-[#666] mx-2">/</span>
                <span className="font-medium text-black">{positionName || `Position ${id}`}</span>
              </li>
            </ol>
          </nav>
          <h1 className="font-bold text-[30px] text-black tracking-[-0.75px] leading-9">
            {loading ? 'Loading…' : positionName || `Position ${id}`}
          </h1>
        </div>
        <Link
          to="/positions"
          className="flex items-center gap-2 bg-black text-white border-2 border-black px-5 py-2.5 font-bold text-[14px] leading-6 hover:bg-white hover:text-black transition-colors"
          aria-label="Go back to positions"
        >
          <span aria-hidden="true">←</span>
          Back to Positions
        </Link>
      </header>

      {/* Board Body */}
      <div className="flex-1 overflow-auto p-8 bg-[#f5f5f5]">
        {loading && (
          <div className="flex justify-center items-center h-full">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-black border-t-transparent" />
          </div>
        )}

        {error && (
          <div className="border-2 border-red-700 bg-red-50 text-red-800 p-4 max-w-lg">{error}</div>
        )}

        {!loading && !error && (
          <div className="flex gap-5 items-start min-h-full pb-2">
            {steps.map((step) => (
              <KanbanColumn
                key={step.id}
                step={step}
                candidates={columns[step.name] ?? []}
                draggingCandidate={draggingCandidate}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                isDragOver={dragOverStep === step.name}
              />
            ))}

            {steps.length === 0 && (
              <p className="text-[#666] text-[14px]">No interview steps configured.</p>
            )}
          </div>
        )}
      </div>

      {/* Toast notifications */}
      <ToastStack toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
};

export default PositionBoard;
