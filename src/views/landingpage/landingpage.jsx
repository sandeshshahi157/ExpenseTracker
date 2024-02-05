<nav className="absolute flex items-center p-4 bg-white rounded-md shadow-lg dark:bg-darker top-16 inset-x-4 md:hidden" aria-label="Secondary">
<div className="space-x-2">
  <button aria-hidden="true" className="relative focus:outline-none" onClick={toggleTheme}>
    <div
      className={`w-12 h-6 transition rounded-full outline-none ${isDark ? 'bg-primary-darker' : 'bg-primary-100 dark:bg-primary-lighter'}`}
    ></div>
    <div
      className={`absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 transform scale-110 rounded-full shadow-sm ${
        isDark ? 'translate-x-6 text-primary-100 bg-primary-darker' : 'translate-x-0 -translate-y-px bg-white text-primary-dark'
      }`}
    >
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isDark ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
    </div>
  </button>

  {/* Notification button */}
  <button
    onClick={() => {}}
    className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
  >
    <span className="sr-only">Open notifications panel</span>
    {/* Add your notification icon here */}
  </button>

  {/* Search button */}
  <button
    onClick={() => {}}
    className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
  >
    <span className="sr-only">Open search panel</span>
    {/* Add your search icon here */}
  </button>

  {/* Settings button */}
  <button
    onClick={() => {}}
    className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
  >
    <span className="sr-only">Open settings panel</span>
    {/* Add your settings icon here */}
  </button>

  <div className="relative ml-auto" onClick={() => setMobileSubMenuOpen(!isMobileSubMenuOpen)}>
    {/* User avatar button */}
    <button
      type="button"
      aria-haspopup="true"
      aria-expanded={isMobileSubMenuOpen ? 'true' : 'false'}
      className="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
    >
      <span className="sr-only">User menu</span>
      <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Avatar" />
    </button>

    {isMobileSubMenuOpen && (
   
      <div
        className="absolute right-0 w-48 py-1 origin-top-right bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark"
        role="menu"
      >
        {/* User dropdown menu items */}
        <a href="profile.jsp" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
          Your Profile
        </a>
        <a href="settings.jsp" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
          Settings
        </a>
        <a href="signup.jsp" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
          Logout
        </a>
      </div>
    )}
  </div>
</div>
</nav>
