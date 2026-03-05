import React from 'react';

/**
 * LTI Landing Page - Option 1: "Raw Concrete"
 * Brutalist aesthetic: Monochromatic, massive typography, newspaper layout
 * Heavy use of whitespace, geometric precision, anti-corporate rawness
 */

const LandingOption1: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header - Minimal brutalist nav */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b-4 border-black">
        <nav className="flex justify-between items-center px-8 py-6">
          <div className="text-2xl font-black tracking-tighter">LTI</div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-wider">
            <button className="hover:bg-black hover:text-white px-4 py-2 transition-colors duration-100">
              Features
            </button>
            <button className="hover:bg-black hover:text-white px-4 py-2 transition-colors duration-100">
              Pricing
            </button>
            <button className="bg-black text-white px-6 py-2 border-2 border-black hover:bg-white hover:text-black transition-colors duration-100">
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Hero - Massive Typography */}
      <section className="pt-32 pb-24 px-8 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h1
              className="text-[12rem] leading-[0.85] font-black uppercase tracking-tighter"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              HIRE
              <br />
              BETTER
            </h1>
            <div className="flex items-start gap-8">
              <div className="w-1 h-32 bg-black"></div>
              <p className="text-xl max-w-md pt-4 leading-relaxed">
                Talent tracking system that doesn&apos;t waste your time.
                <br />
                <span className="font-black">No bloat. No BS. Just results.</span>
              </p>
            </div>
          </div>

          <div className="mt-16 flex gap-4">
            <button className="bg-black text-white px-12 py-6 text-xl font-black uppercase tracking-wider hover:bg-gray-900 transition-colors">
              Start Free Trial
            </button>
            <button className="border-4 border-black px-12 py-6 text-xl font-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
              View Demo
            </button>
          </div>

          {/* Stats Grid */}
          <div className="mt-24 grid grid-cols-3 gap-8">
            <div className="border-4 border-black p-8">
              <div className="text-6xl font-black">10K+</div>
              <div className="text-sm uppercase tracking-widest mt-2">Companies</div>
            </div>
            <div className="border-4 border-black p-8 bg-black text-white">
              <div className="text-6xl font-black">500K+</div>
              <div className="text-sm uppercase tracking-widest mt-2">Candidates</div>
            </div>
            <div className="border-4 border-black p-8">
              <div className="text-6xl font-black">98%</div>
              <div className="text-sm uppercase tracking-widest mt-2">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Newspaper Grid */}
      <section className="py-24 px-8 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl font-black uppercase mb-16 tracking-tighter">What You Get</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="border-4 border-black p-12 hover:bg-black hover:text-white transition-colors duration-200 group">
              <div className="text-8xl font-black mb-4">01</div>
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">
                Pipeline Management
              </h3>
              <p className="text-base leading-relaxed">
                Visual kanban boards. Drag and drop. Real-time updates. Track every candidate
                through your hiring funnel without the friction.
              </p>
            </div>

            <div className="border-4 border-black p-12 hover:bg-black hover:text-white transition-colors duration-200 group">
              <div className="text-8xl font-black mb-4">02</div>
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">
                Interview Scheduling
              </h3>
              <p className="text-base leading-relaxed">
                Automated scheduling that works. Calendar sync. Email reminders. No more
                back-and-forth ping pong.
              </p>
            </div>

            <div className="border-4 border-black p-12 bg-black text-white">
              <div className="text-8xl font-black mb-4">03</div>
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">
                Candidate Database
              </h3>
              <p className="text-base leading-relaxed">
                Searchable. Filterable. Fast. Store resumes, notes, feedback. Find the right person
                when you need them.
              </p>
            </div>

            <div className="border-4 border-black p-12 hover:bg-black hover:text-white transition-colors duration-200 group">
              <div className="text-8xl font-black mb-4">04</div>
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">
                Team Collaboration
              </h3>
              <p className="text-base leading-relaxed">
                Share feedback. Make decisions. Keep everyone in the loop. Hiring is a team sport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-8xl font-black uppercase tracking-tighter leading-none max-w-3xl">
              Ready to
              <br />
              Stop Wasting
              <br />
              Time?
            </h2>
            <div className="space-y-6">
              <button className="bg-white text-black px-16 py-8 text-2xl font-black uppercase tracking-wider hover:bg-gray-200 transition-colors block">
                Get Started Now
              </button>
              <p className="text-sm text-center uppercase tracking-widest">
                No Credit Card Required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-12 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black">LTI</div>
          <div className="text-sm uppercase tracking-widest">© 2024 Talent Tracking System</div>
        </div>
      </footer>

      {/* Google Fonts */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default LandingOption1;
