import React, { useState, useEffect } from 'react';

/**
 * LTI Landing Page - Option 3: "Digital Terminal"
 * Brutalist aesthetic: Terminal/command-line interface, monospace fonts, stark contrast
 * Matrix-inspired with glowing text, scanlines, and digital brutalism
 */

const LandingOption3: React.FC = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> INITIALIZING LTI SYSTEM...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Scanlines effect */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)',
        }}
      ></div>

      {/* Noise texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-40 mix-blend-overlay">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Header - Terminal Style */}
      <header className="relative z-10 border-b-2 border-green-400">
        <div className="px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold tracking-tighter">
                <span className="text-white">[</span>LTI<span className="text-white">]</span>
              </div>
              <div className="text-xs opacity-60 animate-pulse">v2.1.0</div>
            </div>
            <nav className="flex gap-8 text-sm">
              <button className="hover:text-white hover:bg-green-400 hover:text-black px-4 py-2 transition-colors border border-green-400">
                [FEATURES]
              </button>
              <button className="hover:text-white hover:bg-green-400 hover:text-black px-4 py-2 transition-colors border border-green-400">
                [PRICING]
              </button>
              <button className="bg-green-400 text-black px-6 py-2 font-bold hover:bg-white transition-colors">
                [ACCESS]
              </button>
            </nav>
          </div>
        </div>
        <div className="px-8 pb-4 text-xs opacity-60">{terminalText}</div>
      </header>

      {/* Hero - Terminal Output */}
      <section className="relative z-10 pt-20 pb-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Terminal prompt */}
          <div className="mb-8 text-sm">
            <span className="text-white">user@lti:~$</span> <span>cat hero.txt</span>
          </div>

          {/* Massive Terminal Typography */}
          <div className="space-y-4 mb-16">
            <h1 className="text-[10rem] leading-[0.9] font-black uppercase tracking-tighter text-white">
              <span className="inline-block hover:text-green-400 transition-colors cursor-default animate-pulse">
                TRACK
              </span>
            </h1>
            <h1 className="text-[10rem] leading-[0.9] font-black uppercase tracking-tighter text-white ml-32">
              <span className="inline-block hover:text-green-400 transition-colors cursor-default">
                TALENT
              </span>
            </h1>
            <h1 className="text-[10rem] leading-[0.9] font-black uppercase tracking-tighter ml-64">
              <span className="inline-block hover:text-white transition-colors cursor-default">
                ++
              </span>
            </h1>
          </div>

          {/* Terminal box with description */}
          <div className="border-2 border-green-400 p-8 max-w-3xl ml-8 bg-black bg-opacity-80 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <div className="text-xs mb-4 opacity-60">
              ┌─────────────────────────────────────────┐
            </div>
            <p className="text-lg leading-relaxed mb-4">
              <span className="text-white font-bold">&gt;&gt;</span> RECRUITMENT MANAGEMENT SYSTEM
            </p>
            <p className="text-base leading-relaxed mb-4">
              <span className="text-white font-bold">&gt;&gt;</span> OPTIMIZED FOR SPEED AND
              EFFICIENCY
            </p>
            <p className="text-base leading-relaxed mb-4">
              <span className="text-white font-bold">&gt;&gt;</span> ZERO BLOAT. MAXIMUM RESULTS.
            </p>
            <div className="text-xs mb-4 opacity-60">
              └─────────────────────────────────────────┘
            </div>

            <div className="flex gap-4 mt-8">
              <button className="bg-green-400 text-black px-10 py-4 font-bold border-2 border-green-400 hover:bg-white transition-all shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]">
                [INITIALIZE_TRIAL]
              </button>
              <button className="border-2 border-green-400 text-green-400 px-10 py-4 font-bold hover:bg-green-400 hover:text-black transition-all">
                [DEMO_MODE]
              </button>
            </div>
          </div>

          {/* System Stats */}
          <div className="mt-20 ml-8">
            <div className="text-sm mb-6 opacity-60">
              <span className="text-white">user@lti:~$</span> <span>./get_stats.sh</span>
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-5xl">
              <div className="border border-green-400 p-6 bg-black bg-opacity-60 hover:bg-green-400 hover:text-black transition-all group">
                <div className="text-xs mb-2 opacity-60 group-hover:opacity-100">[METRIC_01]</div>
                <div className="text-5xl font-black text-white group-hover:text-black">15.2K</div>
                <div className="text-xs mt-2 uppercase">ACTIVE_USERS</div>
              </div>
              <div className="border border-green-400 p-6 bg-black bg-opacity-60 hover:bg-green-400 hover:text-black transition-all group">
                <div className="text-xs mb-2 opacity-60 group-hover:opacity-100">[METRIC_02]</div>
                <div className="text-5xl font-black text-white group-hover:text-black">99.9%</div>
                <div className="text-xs mt-2 uppercase">UPTIME</div>
              </div>
              <div className="border border-green-400 p-6 bg-black bg-opacity-60 hover:bg-green-400 hover:text-black transition-all group">
                <div className="text-xs mb-2 opacity-60 group-hover:opacity-100">[METRIC_03]</div>
                <div className="text-5xl font-black text-white group-hover:text-black">
                  &lt;50MS
                </div>
                <div className="text-xs mt-2 uppercase">RESPONSE_TIME</div>
              </div>
              <div className="border border-green-400 p-6 bg-black bg-opacity-60 hover:bg-green-400 hover:text-black transition-all group">
                <div className="text-xs mb-2 opacity-60 group-hover:opacity-100">[METRIC_04]</div>
                <div className="text-5xl font-black text-white group-hover:text-black">850+</div>
                <div className="text-xs mt-2 uppercase">COMPANIES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Code Block Style */}
      <section className="relative z-10 py-32 px-8 border-t-2 border-green-400">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-sm mb-8 opacity-60">
            <span className="text-white">user@lti:~$</span> <span>./list_features.sh</span>
          </div>

          <h2 className="text-7xl font-black uppercase mb-16 text-white tracking-tighter">
            [SYSTEM_MODULES]
          </h2>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="border-2 border-green-400 bg-black bg-opacity-60 hover:bg-opacity-80 transition-all group">
              <div className="border-b border-green-400 px-6 py-3 flex items-center justify-between">
                <div className="font-bold text-white group-hover:text-green-400 transition-colors">
                  MODULE_01 :: PIPELINE_MANAGEMENT
                </div>
                <div className="text-xs opacity-60">[STATUS: ACTIVE]</div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm leading-relaxed">
                    <span className="text-white">&gt;</span> VISUAL_KANBAN_INTERFACE
                    <br />
                    <span className="text-white">&gt;</span> DRAG_DROP_FUNCTIONALITY
                    <br />
                    <span className="text-white">&gt;</span> REALTIME_SYNC
                  </p>
                </div>
                <div className="border-l border-green-400 pl-8">
                  <p className="text-sm leading-relaxed opacity-80">
                    Track candidates through your hiring pipeline with precision. Every movement
                    logged. Every status change recorded. Zero friction.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="border-2 border-green-400 bg-black bg-opacity-60 hover:bg-opacity-80 transition-all group">
              <div className="border-b border-green-400 px-6 py-3 flex items-center justify-between">
                <div className="font-bold text-white group-hover:text-green-400 transition-colors">
                  MODULE_02 :: AUTOMATED_SCHEDULING
                </div>
                <div className="text-xs opacity-60">[STATUS: ACTIVE]</div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm leading-relaxed">
                    <span className="text-white">&gt;</span> CALENDAR_INTEGRATION
                    <br />
                    <span className="text-white">&gt;</span> TIMEZONE_DETECTION
                    <br />
                    <span className="text-white">&gt;</span> AUTO_REMINDERS
                  </p>
                </div>
                <div className="border-l border-green-400 pl-8">
                  <p className="text-sm leading-relaxed opacity-80">
                    Let the system handle coordination. Automated interview scheduling with calendar
                    sync. No manual work. No conflicts.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="border-2 border-green-400 bg-black bg-opacity-60 hover:bg-opacity-80 transition-all group">
              <div className="border-b border-green-400 px-6 py-3 flex items-center justify-between">
                <div className="font-bold text-white group-hover:text-green-400 transition-colors">
                  MODULE_03 :: CANDIDATE_DATABASE
                </div>
                <div className="text-xs opacity-60">[STATUS: ACTIVE]</div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm leading-relaxed">
                    <span className="text-white">&gt;</span> ADVANCED_SEARCH
                    <br />
                    <span className="text-white">&gt;</span> CUSTOM_FILTERS
                    <br />
                    <span className="text-white">&gt;</span> INSTANT_RESULTS
                  </p>
                </div>
                <div className="border-l border-green-400 pl-8">
                  <p className="text-sm leading-relaxed opacity-80">
                    Searchable talent database. Filter by skills, experience, location. Find matches
                    in milliseconds. Built for speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Terminal Command */}
      <section className="relative z-10 py-32 px-8 border-t-2 border-green-400">
        <div className="max-w-[1400px] mx-auto">
          <div className="border-2 border-green-400 p-16 bg-black bg-opacity-80 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
            <div className="text-sm mb-8 opacity-60">
              <span className="text-white">user@lti:~$</span>{' '}
              <span className="animate-pulse">█</span>
            </div>

            <h2 className="text-[8rem] leading-[0.9] font-black uppercase mb-8 text-white tracking-tighter">
              EXECUTE
              <br />
              <span className="text-green-400">TRIAL.SH</span>
            </h2>

            <p className="text-xl mb-12 max-w-2xl leading-relaxed">
              <span className="text-white font-bold">&gt;&gt;</span> FREE 14-DAY TRIAL
              <br />
              <span className="text-white font-bold">&gt;&gt;</span> NO CREDIT CARD REQUIRED
              <br />
              <span className="text-white font-bold">&gt;&gt;</span> FULL SYSTEM ACCESS
            </p>

            <button className="bg-green-400 text-black px-16 py-6 text-xl font-black border-2 border-green-400 hover:bg-white transition-all shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)]">
              [RUN_TRIAL_SCRIPT]
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-green-400 py-12 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              <span className="text-white">[</span>LTI<span className="text-white">]</span>
            </div>
            <div className="text-xs opacity-60 uppercase">
              © 2024 TALENT_TRACKING_SYSTEM :: ALL_RIGHTS_RESERVED
            </div>
          </div>
          <div className="mt-6 text-xs opacity-40">
            <span className="text-white">user@lti:~$</span> <span>logout</span>
          </div>
        </div>
      </footer>

      {/* Google Fonts - JetBrains Mono */}
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        body {
          font-family: 'JetBrains Mono', monospace;
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default LandingOption3;
