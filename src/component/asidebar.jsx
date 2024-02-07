import React, { useState, useEffect, useRef } from "react";


export default function AsideBar(){
  const loadingRef = useRef(null);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [isMobileMainMenuOpen, setMobileMainMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSubOpen, setSubopen] = useState(false);
  const userMenuRef = useRef(null);
  const [isNotificationsPanelOpen, setIsNotificationsPanelOpen] =
    useState(false);
  const [activeTab, setActiveTab] = useState("action");
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);
  const searchInputRef = useRef(null);
  const [color, setColor] = useState("defaultColor");

  useEffect(() => {
    // Mimic the $refs.loading.classList.add('hidden') behavior
    if (loadingRef.current) {
      loadingRef.current.classList.add("hidden");
    }

    // Mimic the setColors(color) behavior
    // Replace the following line with your actual color-setting logic
    // e.g., document.documentElement.style.setProperty('--your-color-variable', color);

    // Example color-setting logic

    const body = document.body;
    body.style.backgroundColor = color;

    // Additional cleanup logic if needed
    return () => {
      // Cleanup logic when the component unmounts or when color changes
      // For example, remove the color setting applied above
      body.style.backgroundColor = "";
    };
  }, [color]);

  const closeSearchPanel = () => {
    setIsSearchPanelOpen(false);
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      closeSearchPanel();
    }
  };

  const getTheme = () => {
    if (window.localStorage.getItem("dark")) {
      return JSON.parse(window.localStorage.getItem("dark"));
    }

    return (
      !!window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const setTheme = (value) => {
    window.localStorage.setItem("dark", value);
  };

  const getColor = () => {
    if (window.localStorage.getItem("color")) {
      return window.localStorage.getItem("color");
    }
    return "cyan";
  };

  const setColors = (color) => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", `var(--color-${color})`);
    root.style.setProperty("--color-primary-50", `var(--color-${color}-50)`);
    root.style.setProperty("--color-primary-100", `var(--color-${color}-100)`);
    root.style.setProperty(
      "--color-primary-light",
      `var(--color-${color}-light)`
    );
    root.style.setProperty(
      "--color-primary-lighter",
      `var(--color-${color}-lighter)`
    );
    root.style.setProperty(
      "--color-primary-dark",
      `var(--color-${color}-dark)`
    );
    root.style.setProperty(
      "--color-primary-darker",
      `var(--color-${color}-darker)`
    );
    window.localStorage.setItem("color", color);
    //
  };

  const openSearchPanel = () => {
    if (handleEscapeKey) {
      setIsSearchPanelOpen(!isSearchPanelOpen);
    }
  };

  const historyItems = Array.from({ length: 5 }, (_, i) => i + 1);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Add your theme toggle logic here
  };
  const setLightTheme = () => {
    // Implement your light theme logic
    setIsDark(false);
  };

  const setDarkTheme = () => {
    // Implement your dark theme logic
    setIsDark(true);
  };

  const openSettingsPanel = () => {
    setIsSettingsPanelOpen(!isSettingsPanelOpen);
  };

  const handleToggle = () => {
    setIsNotificationsPanelOpen(!isNotificationsPanelOpen);
  };

  const handleClose = () => {
    setIsNotificationsPanelOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
    return(<>

<div className={isDark ? "dark" : ""}>
        <div className="flex w-full antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
          <div
            ref={loadingRef}
            class="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-primary-darker"
          >
            Loading.....
          </div>
    <aside className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
            <div className="flex flex-col h-full">
              <nav
                aria-label="Main"
                className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
              >
                <div x-data="{ isActive: true, open: true}">
                 
                  <a to="/"
                   className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                    role="button"
                    aria-haspopup="true"
                   >
                    <span aria-hidden="true">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm"> Dashboard</span>
                    <span className="ml-auto" aria-hidden="true">
                      <svg
                        className="w-4 h-4 transition-transform transform"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                    </a>
                </div>

                {/* Repeat the structure for other navigation items */}

                <div x-data="{ isActive: false, open: false }">
                  <a href=""
                    className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                    role="button"
                    aria-haspopup="true"
                  >
                    <span aria-hidden="true">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm">Add Expense</span>
                    <span aria-hidden="true" className="ml-auto">
                      <svg
                        className="w-4 h-4 transition-transform transform"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Repeat the structure for other navigation items */}

                {/* ... Additional navigation items ... */}
              </nav>
            </div>
          </aside>

          </div>
</div>

    </>)
}