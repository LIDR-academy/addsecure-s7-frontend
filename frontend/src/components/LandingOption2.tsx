import React from 'react';

/**
 * LTI Landing Page - Option 2: "Geometric Chaos"
 * Brutalist aesthetic: Bold primary colors, Swiss design influence, overlapping elements
 * Dynamic asymmetric layout with geometric shapes and controlled chaos
 */

const LandingOption2: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-black overflow-x-hidden">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-yellow-400 rotate-45 opacity-80"></div>
        <div className="absolute bottom-40 left-[5%] w-96 h-96 bg-red-600 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-[30%] w-48 h-48 border-8 border-blue-600 rotate-12"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black text-white">
        <nav className="flex justify-between items-center px-12 py-8 border-b-4 border-yellow-400">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-400"></div>
            <div className="text-3xl font-black tracking-tighter">LTI</div>
          </div>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
            <button className="hover:text-yellow-400 transition-colors">Features</button>
            <button className="hover:text-yellow-400 transition-colors">Pricing</button>
            <button className="hover:text-yellow-400 transition-colors">About</button>
            <button className="bg-yellow-400 text-black px-8 py-3 hover:bg-yellow-300 transition-colors">
              Start Free
            </button>
          </div>
        </nav>
      </header>

      {/* Hero - Massive Geometric Typography */}
      <section className="relative z-10 pt-24 pb-32 px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative">
            {/* Background geometric accent */}
            <div className="absolute -left-8 top-0 w-32 h-full bg-red-600"></div>

            <div className="relative pl-32">
              <div className="inline-block bg-yellow-400 px-6 py-2 -rotate-2 mb-8">
                <span className="text-sm font-black uppercase tracking-wider">
                  Recruitment Software
                </span>
              </div>

              <h1
                className="text-[14rem] leading-[0.8] font-black uppercase tracking-tighter mb-12 relative"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                <span className="relative inline-block">
                  TRACK
                  <div className="absolute -right-16 top-8 w-32 h-32 bg-blue-600 -z-10 rotate-12"></div>
                </span>
                <br />
                <span className="relative inline-block ml-32 text-red-600">
                  TALENT
                  <div className="absolute -bottom-8 -left-12 w-40 h-40 border-8 border-yellow-400 -z-10"></div>
                </span>
                <br />
                <span className="relative inline-block">
                  FASTER
                  <div className="absolute -top-4 -right-20 w-24 h-24 bg-yellow-400 rounded-full -z-10"></div>
                </span>
              </h1>

              <div className="flex items-start gap-12 ml-32">
                <div className="w-2 h-40 bg-black"></div>
                <div className="max-w-xl space-y-6">
                  <p className="text-2xl font-bold leading-relaxed">
                    Hiring software that breaks the mold.{' '}
                    <span className="bg-yellow-400 px-2">Bold. Fast. Effective.</span>
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-black text-white px-10 py-5 text-lg font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors">
                      Get Started
                    </button>
                    <button className="bg-red-600 text-white px-10 py-5 text-lg font-black uppercase hover:bg-red-700 transition-colors">
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Stats Cards */}
          <div className="mt-32 relative">
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-black text-white p-10 relative z-20 transform hover:-translate-y-2 transition-transform">
                <div className="text-6xl font-black text-yellow-400">12K</div>
                <div className="text-xs uppercase tracking-widest mt-3">Active Users</div>
              </div>
              <div className="bg-yellow-400 text-black p-10 relative z-30 transform -translate-y-4 hover:-translate-y-6 transition-transform">
                <div className="text-6xl font-black">99%</div>
                <div className="text-xs uppercase tracking-widest mt-3 font-bold">Success Rate</div>
              </div>
              <div className="bg-blue-600 text-white p-10 relative z-20 transform hover:-translate-y-2 transition-transform">
                <div className="text-6xl font-black">24/7</div>
                <div className="text-xs uppercase tracking-widest mt-3">Support</div>
              </div>
              <div className="bg-red-600 text-white p-10 relative z-10 transform -translate-y-2 hover:-translate-y-4 transition-transform">
                <div className="text-6xl font-black">500+</div>
                <div className="text-xs uppercase tracking-widest mt-3">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Asymmetric Grid */}
      <section className="relative z-10 py-32 px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-start mb-20">
            <h2
              className="text-9xl font-black uppercase tracking-tighter"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Features
            </h2>
            <div className="w-32 h-32 bg-yellow-400 rotate-45"></div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Large feature card */}
            <div className="col-span-7 bg-black text-white p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45 translate-x-32 -translate-y-32"></div>
              <div className="relative z-10">
                <div className="text-7xl font-black mb-6 text-yellow-400">01</div>
                <h3 className="text-5xl font-black uppercase mb-6">
                  Pipeline
                  <br />
                  Management
                </h3>
                <p className="text-xl leading-relaxed max-w-lg">
                  Drag. Drop. Done. Visual kanban boards that make hiring intuitive. Track every
                  candidate from first contact to offer letter without losing momentum.
                </p>
              </div>
            </div>

            {/* Two stacked smaller cards */}
            <div className="col-span-5 space-y-6">
              <div className="bg-yellow-400 text-black p-12 hover:bg-yellow-300 transition-colors">
                <div className="text-6xl font-black mb-4">02</div>
                <h3 className="text-3xl font-black uppercase mb-4">Smart Scheduling</h3>
                <p className="text-base leading-relaxed">
                  Automated interview scheduling. Calendar sync. Zero back-and-forth.
                </p>
              </div>
              <div className="bg-blue-600 text-white p-12 hover:bg-blue-700 transition-colors">
                <div className="text-6xl font-black mb-4">03</div>
                <h3 className="text-3xl font-black uppercase mb-4">Candidate Hub</h3>
                <p className="text-base leading-relaxed">
                  Searchable database. Advanced filters. Lightning-fast results.
                </p>
              </div>
            </div>

            {/* Wide card */}
            <div className="col-span-5 bg-red-600 text-white p-12 hover:bg-red-700 transition-colors">
              <div className="text-6xl font-black mb-4">04</div>
              <h3 className="text-3xl font-black uppercase mb-4">Team Collaboration</h3>
              <p className="text-base leading-relaxed">
                Shared feedback. Real-time updates. Keep everyone aligned from first screen to final
                decision.
              </p>
            </div>

            {/* Accent card */}
            <div className="col-span-7 border-8 border-black p-16 relative">
              <div className="absolute top-8 left-8 w-20 h-20 bg-yellow-400"></div>
              <div className="relative z-10 pl-24">
                <div className="text-6xl font-black mb-4">05</div>
                <h3 className="text-4xl font-black uppercase mb-4">Analytics Dashboard</h3>
                <p className="text-lg leading-relaxed">
                  Time-to-hire. Source effectiveness. Pipeline health. Make data-driven decisions
                  with real-time insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Bold Geometric */}
      <section className="relative z-10 py-32 px-12 bg-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 transform -rotate-12 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <h2
              className="text-[10rem] leading-[0.85] font-black uppercase mb-12"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Start
              <br />
              Hiring
              <br />
              <span className="text-yellow-400">Better</span>
            </h2>
            <button className="bg-yellow-400 text-black px-16 py-8 text-2xl font-black uppercase border-4 border-yellow-400 hover:bg-black hover:text-yellow-400 transition-colors">
              Try LTI Free for 14 Days
            </button>
            <p className="mt-6 text-sm uppercase tracking-widest">No credit card • No setup fees</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white border-t-8 border-black py-16 px-12">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-yellow-400"></div>
            <div className="text-4xl font-black">LTI</div>
          </div>
          <div className="text-sm uppercase tracking-widest font-bold">
            © 2024 Talent Tracking System
          </div>
        </div>
      </footer>

      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
    </div>
  );
};

export default LandingOption2;
