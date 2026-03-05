import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

type Position = {
  id: number;
  title: string;
  status: string;
  location: string;
  applicationDeadline: string | null;
  companyName: string;
};

type StatusConfig = {
  bg: string;
  border: string;
  text: string;
  label: string;
};

const STATUS_CONFIG: Record<string, StatusConfig> = {
  Open: {
    bg: 'bg-[#bbf7d0]',
    border: 'border-[#14532d]',
    text: 'text-[#14532d]',
    label: 'PUBLISHED',
  },
  Draft: { bg: 'bg-[#fef08a]', border: 'border-[#713f12]', text: 'text-[#713f12]', label: 'DRAFT' },
  Filled: { bg: 'bg-blue-100', border: 'border-blue-800', text: 'text-blue-800', label: 'FILLED' },
  Closed: { bg: 'bg-red-100', border: 'border-red-700', text: 'text-red-700', label: 'CLOSED' },
};

const PIPELINE_PRESETS = [
  [
    { color: 'bg-black', pct: 60 },
    { color: 'bg-[#666]', pct: 20 },
    { color: 'bg-blue-600', pct: 15 },
    { color: 'bg-[#ffd700]', pct: 5 },
  ],
  [
    { color: 'bg-black', pct: 40 },
    { color: 'bg-[#666]', pct: 40 },
    { color: 'bg-blue-600', pct: 20 },
  ],
  [
    { color: 'bg-black', pct: 80 },
    { color: 'bg-[#666]', pct: 10 },
    { color: 'bg-blue-600', pct: 10 },
  ],
  [{ color: 'bg-black', pct: 100 }],
];

const getPipeline = (id: number) => PIPELINE_PRESETS[id % PIPELINE_PRESETS.length];

const getMockApplicants = (id: number) => [45, 87, 142, 56, 23, 210, 18, 99][id % 8];

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="5.25" stroke="#666" strokeWidth="1.5" />
    <line
      x1="9.89"
      y1="9.89"
      x2="13.25"
      y2="13.25"
      stroke="#666"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2.5 4.5L6 8L9.5 4.5"
      stroke="#666"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
    <path
      d="M6.5 1H10M10 1V4.5M10 1L5 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 2H2C1.44772 2 1 2.44772 1 3V9C1 9.55228 1.44772 10 2 10H8C8.55228 10 9 9.55228 9 9V6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const config = STATUS_CONFIG[status] ?? {
    bg: 'bg-gray-100',
    border: 'border-gray-600',
    text: 'text-gray-600',
    label: status.toUpperCase(),
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-1.5 border-2 text-[11px] font-bold tracking-[0.3px] ${config.bg} ${config.border} ${config.text}`}
    >
      {config.label}
    </span>
  );
};

const StagePipelineBar: React.FC<{ positionId: number; hasApplicants: boolean }> = ({
  positionId,
  hasApplicants,
}) => {
  if (!hasApplicants) {
    return <div className="w-full h-3 border-2 border-black bg-white" />;
  }

  const segments = getPipeline(positionId);

  return (
    <div className="w-full h-3 border-2 border-black bg-[#f5f5f5] overflow-hidden">
      <div className="flex h-full p-[2px] gap-[1px]">
        {segments.map((seg, i) => (
          <div key={i} className={`h-full ${seg.color}`} style={{ width: `${seg.pct}%` }} />
        ))}
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] p-6 flex-1 flex flex-col gap-2">
    <span className="font-semibold text-[14px] text-[#666] tracking-[0.7px] uppercase leading-5">
      {label}
    </span>
    <div>{children}</div>
  </div>
);

const Positions: React.FC = () => {
  const navigate = useNavigate();
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('http://localhost:3010/position');
        if (!response.ok) throw new Error('Failed to fetch positions');
        const data = await response.json();
        setPositions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchPositions();
  }, []);

  const handleViewProcess = (positionId: number) => {
    navigate(`/positions/${positionId}`);
  };

  const openCount = positions.filter((p) => p.status === 'Open').length;

  const filtered = positions.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex flex-col h-full">
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
                <span className="font-medium text-black">Positions</span>
              </li>
            </ol>
          </nav>
          <h1 className="font-bold text-[30px] text-black tracking-[-0.75px] leading-9">
            Positions
          </h1>
        </div>
        <Link
          to="/add-candidate"
          className="bg-[#ffd700] border-2 border-black shadow-[4px_4px_0px_0px_black] px-6 py-2.5 font-bold text-[16px] text-black leading-6 hover:shadow-[2px_2px_0px_0px_black] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          aria-label="Add a new candidate"
        >
          New position
        </Link>
      </header>

      {/* Page Body */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex flex-col gap-8 max-w-[1280px]">
          {/* Stats */}
          <div className="flex gap-6 h-[140px]">
            <StatCard label="Open Roles">
              <span className="font-bold text-[36px] text-black leading-10">
                {loading ? '—' : openCount}
              </span>
            </StatCard>
            <StatCard label="Total Applicants">
              <span className="font-bold text-[36px] text-black leading-10">1,205</span>
            </StatCard>
            <StatCard label={`Interviews this\nweek`}>
              <span className="font-bold text-[36px] text-black leading-10">38</span>
            </StatCard>
            <StatCard label="Avg Time-to-fill">
              <span className="font-bold text-[36px] text-black leading-10">
                18 <span className="font-medium text-[20px] text-[#666] leading-7">days</span>
              </span>
            </StatCard>
          </div>

          {/* Search & Filter */}
          <div className="bg-white border-2 border-black flex items-center justify-between p-[18px] gap-4">
            <div className="relative flex-1 max-w-[448px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search roles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#f5f5f5] border-2 border-black pl-10 pr-4 py-3 text-[16px] text-[#666] placeholder-[#666] focus:outline-none focus:border-black"
                aria-label="Search positions"
              />
            </div>
            <div className="flex gap-4">
              <button
                className="bg-[#f5f5f5] border-2 border-black px-4 py-2.5 flex items-center gap-2 text-[16px] font-medium text-black w-[195px] justify-between"
                aria-label="Filter by department"
              >
                <span>All Departments</span>
                <ChevronIcon />
              </button>
              <button
                className="bg-[#f5f5f5] border-2 border-black px-4 py-2.5 flex items-center gap-2 text-[16px] font-medium text-black w-[148px] justify-between"
                aria-label="Filter by status"
              >
                <span>Status: Open</span>
                <ChevronIcon />
              </button>
            </div>
          </div>

          {/* Table */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-black border-t-transparent" />
            </div>
          )}

          {error && (
            <div className="border-2 border-red-700 bg-red-50 text-red-800 p-4">{error}</div>
          )}

          {!loading && !error && (
            <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_black] overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f5] border-b-2 border-black">
                    <th className="text-left px-4 py-[26px] border-r-2 border-black text-[14px] font-bold text-[#666] tracking-[0.7px] uppercase w-[239px]">
                      Role Title
                    </th>
                    <th className="text-left px-4 py-[26px] border-r-2 border-black text-[14px] font-bold text-[#666] tracking-[0.7px] uppercase w-[138px]">
                      Department
                    </th>
                    <th className="text-left px-4 py-[26px] border-r-2 border-black text-[14px] font-bold text-[#666] tracking-[0.7px] uppercase w-[112px]">
                      Location
                    </th>
                    <th className="text-left px-4 py-[26px] border-r-2 border-black text-[14px] font-bold text-[#666] tracking-[0.7px] uppercase w-[111px]">
                      Hiring
                      <br />
                      Manager
                    </th>
                    <th className="text-right px-4 py-[26px] border-r-2 border-black text-[14px] font-bold text-[#666] tracking-[0.7px] uppercase w-[131px]">
                      Applicants
                    </th>
                    <th className="text-left px-4 py-[26px] border-r-2 border-black text-[14px] font-bold text-[#666] tracking-[0.7px] uppercase w-[101px]">
                      Stage
                      <br />
                      Pipeline
                    </th>
                    <th className="text-center px-4 py-[26px] text-[14px] font-bold text-[#666] tracking-[0.7px] uppercase w-[123px]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((position, idx) => {
                    const applicants = getMockApplicants(position.id);
                    const isEven = idx % 2 === 1;

                    return (
                      <tr
                        key={position.id}
                        className={`border-b-2 border-black last:border-b-0 ${isEven ? 'bg-[#f5f5f5]' : 'bg-white'}`}
                      >
                        {/* Role Title */}
                        <td className="px-4 py-5 border-r-2 border-black">
                          <button
                            onClick={() => handleViewProcess(position.id)}
                            className="flex items-center gap-2 font-bold text-[14px] text-black hover:underline text-left"
                            aria-label={`View ${position.title}`}
                          >
                            {position.title}
                            <span className="text-black flex-shrink-0">
                              <ExternalLinkIcon />
                            </span>
                          </button>
                        </td>

                        {/* Department */}
                        <td className="px-4 py-5 border-r-2 border-black font-medium text-[14px] text-black">
                          {position.companyName || '—'}
                        </td>

                        {/* Location */}
                        <td className="px-4 py-5 border-r-2 border-black text-[14px] text-black">
                          {position.location || '—'}
                        </td>

                        {/* Hiring Manager */}
                        <td className="px-4 py-5 border-r-2 border-black text-[14px] text-black">
                          —
                        </td>

                        {/* Applicants */}
                        <td className="px-4 py-5 border-r-2 border-black text-right font-bold text-[14px] text-black">
                          {applicants}
                        </td>

                        {/* Stage Pipeline */}
                        <td className="px-4 py-5 border-r-2 border-black">
                          <StagePipelineBar
                            positionId={position.id}
                            hasApplicants={applicants > 0}
                          />
                        </td>

                        {/* Status */}
                        <td className="px-4 py-4 text-center">
                          <StatusBadge status={position.status} />
                        </td>
                      </tr>
                    );
                  })}

                  {filtered.length === 0 && !loading && (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-[#666] text-[14px]">
                        No positions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Positions;
