import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const DashboardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PositionsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <rect x="0.75" y="4.75" width="13.5" height="9.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4.75 4.75V3C4.75 2.17157 5.42157 1.5 6.25 1.5H8.75C9.57843 1.5 10.25 2.17157 10.25 3V4.75"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <line x1="0.75" y1="8.75" x2="14.25" y2="8.75" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ApplicantsIcon = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
    <circle cx="6.5" cy="4" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M0.75 11.25C0.75 8.9 3.37 7 6.5 7C9.63 7 12.25 8.9 12.25 11.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11.5 1.5C12.88 1.5 14 2.62 14 4C14 5.38 12.88 6.5 11.5 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13.5 7.25C15.1 7.7 16.25 8.9 16.25 10.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const InterviewsIcon = () => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" aria-hidden="true">
    <rect x="0.75" y="2.25" width="12.5" height="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="0.75" y1="6.25" x2="13.25" y2="6.25" stroke="currentColor" strokeWidth="1.5" />
    <line
      x1="4.25"
      y1="0.75"
      x2="4.25"
      y2="3.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="9.75"
      y1="0.75"
      x2="9.75"
      y2="3.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TeamsIcon = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
    <circle cx="8.5" cy="4" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M2.25 11.25C2.25 8.9 5.07 7 8.5 7C11.93 7 14.75 8.9 14.75 11.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M1 1.5C2.38 1.5 3.5 2.62 3.5 4C3.5 5.38 2.38 6.5 1 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 1.5C14.62 1.5 13.5 2.62 13.5 4C13.5 5.38 14.62 6.5 16 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <rect x="0.75" y="6.75" width="2.5" height="4.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4.75" y="3.75" width="2.5" height="7.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8.75" y="0.75" width="2.5" height="10.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const HomeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path
      d="M1.75 14.25H13.25V7.25L7.5 2.5L1.75 7.25V14.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <line x1="5.75" y1="8" x2="5.75" y2="14.25" stroke="currentColor" strokeWidth="1.5" />
    <line x1="9.25" y1="8" x2="9.25" y2="14.25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 1.25V2.5M7.5 12.5V13.75M13.75 7.5H12.5M2.5 7.5H1.25M12.02 2.98L11.13 3.87M3.87 11.13L2.98 12.02M12.02 12.02L11.13 11.13M3.87 3.87L2.98 2.98"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const navItems = [
  { path: '/', label: 'Home', icon: <HomeIcon />, end: true },
  { path: '/dashboard', label: 'Dashboard', icon: <DashboardIcon />, end: true },
  { path: '/dashboard/positions', label: 'Positions', icon: <PositionsIcon />, end: false },
  { path: '/dashboard/applicants', label: 'Applicants', icon: <ApplicantsIcon />, end: false },
  { path: '/dashboard/interviews', label: 'Interviews', icon: <InterviewsIcon />, end: false },
  { path: '/dashboard/teams', label: 'Teams', icon: <TeamsIcon />, end: false },
  { path: '/dashboard/analytics', label: 'Analytics', icon: <AnalyticsIcon />, end: false },
];

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-[#f5f5f5] font-inter">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white border-r-2 border-black flex flex-col h-full overflow-hidden">
        {/* Logo */}
        <div className="border-b-2 border-black px-6 py-6 flex items-center gap-3 flex-shrink-0">
          <div className="bg-black w-8 h-8 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-[13px] leading-none tracking-tight">
              LTI
            </span>
          </div>
          <span className="font-bold text-[20px] text-black tracking-[-0.5px]">System</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto" aria-label="Main navigation">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 transition-colors ${
                      isActive ? 'bg-black text-white' : 'text-[#666] hover:bg-gray-50'
                    }`
                  }
                  aria-label={item.label}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className="font-medium text-[16px] leading-6">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom: Settings + User */}
        <div className="border-t-2 border-black px-4 pb-4 pt-[18px] flex flex-col gap-4 flex-shrink-0">
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-black text-white' : 'text-[#666] hover:bg-gray-50'
              }`
            }
            aria-label="Settings"
          >
            <span className="flex-shrink-0">
              <SettingsIcon />
            </span>
            <span className="font-medium text-[16px] leading-6">Settings</span>
          </NavLink>

          <div className="flex items-center gap-3 px-4">
            <div
              className="w-8 h-8 rounded-full bg-gray-200 border-2 border-black flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <span className="text-[11px] font-bold text-black">AM</span>
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-[14px] text-black leading-5 truncate">
                Alex Mercer
              </div>
              <div className="font-normal text-[12px] text-[#666] leading-4 truncate">
                HR Manager
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 min-w-0 overflow-y-auto flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
