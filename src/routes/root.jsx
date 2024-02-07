import React, { useState, useEffect, useRef } from "react";
import DashBoardPage from "../views/dashboard/dashboard";
import "../assets/css/tailwind.css";

// import { BrowserRouter , Route, Routes} from 'react-router-dom';

import ExpenseForm from "../views/addexpense/addExpense";
import AsideBar from "../component/asidebar";
import Navbar from "../component/navbar";

//       return JSON.parse(window.localStorage.getItem("dark"));
//     }

//     return (
//       !!window.matchMedia &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches
//     );
//   };

//   const setTheme = (value) => {
//     window.localStorage.setItem("dark", value);
//   };

//   const getColor = () => {
//     if (window.localStorage.getItem("color")) {
//       return window.localStorage.getItem("color");
//     }
//     return "cyan";
//   };

//   const setColors = (color) => {
//     const root = document.documentElement;
//     root.style.setProperty("--color-primary", `var(--color-${color})`);
//     root.style.setProperty("--color-primary-50", `var(--color-${color}-50)`);
//     root.style.setProperty("--color-primary-100", `var(--color-${color}-100)`);
//     root.style.setProperty(
//       "--color-primary-light",
//       `var(--color-${color}-light)`
//     );
//     root.style.setProperty(
//       "--color-primary-lighter",
//       `var(--color-${color}-lighter)`
//     );
//     root.style.setProperty(
//       "--color-primary-dark",
//       `var(--color-${color}-dark)`
//     );
//     root.style.setProperty(
//       "--color-primary-darker",
//       `var(--color-${color}-darker)`
//     );
//     this.selectedColor = color;
//     window.localStorage.setItem("color", color);
//     //
//   };

//   const updateBarChart = (on) => {
//     const data = {
//       data: randomData(),
//       backgroundColor: "rgb(207, 250, 254)",
//     };
//     if (on) {
//       barChart.data.datasets.push(data);
//       barChart.update();
//     } else {
//       barChart.data.datasets.splice(1);
//       barChart.update();
//     }
//   };

//   const updateDoughnutChart = (on) => {
//     const data = random();
//     const color = "rgb(207, 250, 254)";
//     if (on) {
//       doughnutChart.data.labels.unshift("Seb");
//       doughnutChart.data.datasets[0].data.unshift(data);
//       doughnutChart.data.datasets[0].backgroundColor.unshift(color);
//       doughnutChart.update();
//     } else {
//       doughnutChart.data.labels.splice(0, 1);
//       doughnutChart.data.datasets[0].data.splice(0, 1);
//       doughnutChart.data.datasets[0].backgroundColor.splice(0, 1);
//       doughnutChart.update();
//     }
//   };

//   const updateLineChart = () => {
//     lineChart.data.datasets[0].data.reverse();
//     lineChart.update();
//   };

//   return {
//     loading: true,
//     isDark: getTheme(),
//     toggleTheme() {
//       this.isDark = !this.isDark;
//       setTheme(this.isDark);
//     },
//     setLightTheme() {
//       this.isDark = false;
//       setTheme(this.isDark);
//     },
//     setDarkTheme() {
//       this.isDark = true;
//       setTheme(this.isDark);
//     },
//     color: getColor(),
//     selectedColor: "cyan",
//     setColors,
//     toggleSidbarMenu() {
//       this.isSidebarOpen = !this.isSidebarOpen;
//     },
//     isSettingsPanelOpen: false,
//     openSettingsPanel() {
//       this.isSettingsPanelOpen = true;
//       this.$nextTick(() => {
//         this.$refs.settingsPanel.focus();
//       });
//     },
//     isNotificationsPanelOpen: false,
//     openNotificationsPanel() {
//       this.isNotificationsPanelOpen = true;
//       this.$nextTick(() => {
//         this.$refs.notificationsPanel.focus();
//       });
//     },
//     isSearchPanelOpen: false,
//     openSearchPanel() {
//       this.isSearchPanelOpen = true;
//       this.$nextTick(() => {
//         this.$refs.searchInput.focus();
//       });
//     },
//     isMobileSubMenuOpen: false,
//     openMobileSubMenu() {
//       this.isMobileSubMenuOpen = true;
//       this.$nextTick(() => {
//         this.$refs.mobileSubMenu.focus();
//       });
//     },
//     isMobileMainMenuOpen: false,
//     openMobileMainMenu() {
//       this.isMobileMainMenuOpen = true;
//       this.$nextTick(() => {
//         this.$refs.mobileMainMenu.focus();
//       });
//     },
//     updateBarChart,
//     updateDoughnutChart,
//     updateLineChart,
//   };
// };
const Root = () => {
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

  return (
    <>
      <div className={isDark ? "dark" : ""}>
        <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
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
                  <a
                    to="/"
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
                  <a
                    href=""
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

          <div class="flex-1 h-full ">
            <header className="relative bg-white dark:bg-darker w-full">
              <div className="flex items-center justify-between p-2 border-b dark:border-primary-darker">
                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMainMenuOpen(!isMobileMainMenuOpen)}
                  className="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark md:hidden focus:outline-none focus:ring"
                >
                  <span className="sr-only">Open main menu</span>
                  <span aria-hidden="true">
                    {/* Mobile menu icon */}
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                </button>

                {/* Brand */}
                <a
                  href="#"
                  className="inline-block text-2xl font-bold tracking-wider font-mono text-primary-dark dark:text-light"
                >
                  ExP
                </a>

                {/* Mobile sub menu button */}
                <button
                  onClick={() => setMobileSubMenuOpen(!isMobileSubMenuOpen)}
                  className="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark md:hidden focus:outline-none focus:ring"
                >
                  <span className="sr-only">Open sub menu</span>
                  <span aria-hidden="true">
                    {/* Mobile sub menu icon */}
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </span>
                </button>

                {isMobileSubMenuOpen && (
                  <nav
                    className="absolute flex flex-row items-center p-4 bg-white rounded-md shadow-lg dark:bg-darker top-16 inset-x-4 md:hidden"
                    aria-label="Secondary"
                  >
                    <div className="space-x-4 flex">
                      <button
                        aria-hidden="true"
                        className="relative focus:outline-none"
                        onClick={toggleTheme}
                      >
                        <div
                          className={`w-12 h-6 transition rounded-full outline-none ${
                            isDark
                              ? "bg-primary-darker"
                              : "bg-primary-100 dark:bg-primary-lighter"
                          }`}
                        ></div>
                        <div
                          className={`absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 transform scale-110 rounded-full shadow-sm ${
                            isDark
                              ? "translate-x-6 text-primary-100 bg-primary-darker"
                              : "translate-x-0 -translate-y-px bg-white text-primary-dark"
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
                        onClick={handleToggle}
                        className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
                      >
                        <span className="sr-only">
                          Open notifications panel
                        </span>
                        {/* Add your notification icon here */}
                        <svg
                          className="w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </button>

                      {/* Search button */}
                      <button
                        onClick={openSearchPanel}
                        className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
                      >
                        <span className="sr-only">Open search panel</span>
                        {/* Add your search icon here */}
                        <svg
                          className="w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>

                      {/* Settings button */}
                      <button
                        onClick={openSettingsPanel}
                        className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
                      >
                        <span className="sr-only">Open settings panel</span>
                        {/* Add your settings icon here */}
                        <svg
                          className="w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={() => setSubopen(!isSubOpen)}
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={setSubopen ? "true" : "false"}
                        className="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                      >
                        <span className="sr-only">User menu</span>
                        <img
                          className="w-10 h-10 rounded-full"
                          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt="User Avatar"
                        />
                      </button>

                      <div className="relative right-20">
                        {/* User avatar button */}

                        {isSubOpen && (
                          <div
                            className="absolute  w-28 py-1 origin-top-right bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark"
                            role="menu"
                          >
                            {/* User dropdown menu items */}
                            <a
                              href="#"
                              role="menuitem"
                              className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                            >
                              Your Profile
                            </a>
                            <a
                              href="#"
                              role="menuitem"
                              className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                            >
                              Settings
                            </a>
                            <a
                              href="#"
                              role="menuitem"
                              className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                            >
                              Logout
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </nav>
                )}

                {/* Desktop Right buttons */}
                <nav
                  aria-label="Secondary"
                  className="hidden space-x-2 md:flex md:items-center"
                >
                  {/* Toggle dark theme button */}
                  <button
                    aria-hidden="true"
                    className="relative focus:outline-none"
                    onClick={toggleTheme}
                  >
                    <div
                      className={`w-12 h-6 transition rounded-full outline-none ${
                        isDark
                          ? "bg-primary-darker"
                          : "bg-primary-100 dark:bg-primary-lighter"
                      }`}
                    ></div>
                    <div
                      className={`absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm ${
                        isDark
                          ? "translate-x-6 text-primary-100 bg-primary-darker"
                          : "translate-x-0 -translate-y-px bg-white text-primary-dark"
                      }`}
                    >
                      {!isDark && (
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      )}
                      {isDark && (
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Notification button */}
                  <button
                    onClick={handleToggle}
                    className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
                  >
                    <span className="sr-only">Open Notification panel</span>
                    {/* Notification icon */}
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  {/* Search button */}
                  <button
                    onClick={openSearchPanel}
                    className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
                  >
                    <span className="sr-only">Open search panel</span>
                    {/* Search icon */}
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  {/* Settings button */}
                  <button
                    onClick={openSettingsPanel}
                    className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
                  >
                    <span className="sr-only">Open settings panel</span>
                    {/* Settings icon */}
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>

                  {/* User avatar button */}
                  <div className="relative" data-x-data="{ open: false }">
                    <button
                      onClick={() => {
                        setOpen(!open);
                        userMenuRef.current.focus(null);
                      }}
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : "false"}
                      className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                    >
                      <span className="sr-only">User menu</span>
                      {/* User avatar */}
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="User avatar"
                      />
                    </button>

                    {/* User dropdown menu */}
                    <div
                      x-show="open"
                      x-ref="userMenu" // Ensure that x-ref is set here
                      x-transition:enter="transition-all transform ease-out"
                      x-transition:enter-start="translate-y-1/2 opacity-0"
                      x-transition:enter-end="translate-y-0 opacity-100"
                      x-transition:leave="transition-all transform ease-in"
                      x-transition:leave-start="translate-y-0 opacity-100"
                      x-transition:leave-end="translate-y-1/2 opacity-0"
                      onClick={() => setOpen(false)}
                      tabIndex="-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-label="User menu"
                      className={`absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      {/* User menu items */}
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </nav>
              </div>

              <div
                className={`border-b md:hidden dark:border-primary-darker ${
                  isMobileMainMenuOpen ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col h-full">
                  <nav
                    aria-label="Main"
                    className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
                  >
                    <div x-data="{ isActive: true, open: true}">
                      <a
                        href="#"
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
                      <a
                        href="#"
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
              </div>
            </header>

            {isNotificationsPanelOpen && (
              <div
                onClick={handleClose}
                className="fixed inset-0 z-10 bg-primary-darker"
                style={{ opacity: 0.5 }}
                aria-hidden="true"
              ></div>
            )}

            {/* Panel */}
            {isNotificationsPanelOpen && (
              <section
                className="fixed inset-y-0 z-20 w-full max-w-xs bg-white dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
                tabIndex="-1"
                aria-labelledby="notificationPanelLabel"
              >
                <div className="absolute right-0 p-2 transform translate-x-full">
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="p-2 text-white rounded-md focus:outline-none focus:ring"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col h-screen">
                  {/* Panel header */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-between px-4 pt-4 border-b dark:border-primary-darker">
                      <h2
                        id="notificationPanelLabel"
                        className="pb-4 font-semibold"
                      >
                        Notifications
                      </h2>
                      <div className="space-x-2">
                        <button
                          onClick={() => handleTabChange("action")}
                          className={`px-px pb-4 transition-all duration-200 transform translate-y-px border-b focus:outline-none ${
                            activeTab === "action"
                              ? "border-primary-dark dark:border-primary"
                              : "border-transparent"
                          }`}
                        >
                          Action
                        </button>
                        <button
                          onClick={() => handleTabChange("user")}
                          className={`px-px pb-4 transition-all duration-200 transform translate-y-px border-b focus:outline-none ${
                            activeTab === "user"
                              ? "border-primary-dark dark:border-primary"
                              : "border-transparent"
                          }`}
                        >
                          User
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Panel content (tabs) */}
                  <div className="flex-1 pt-4 overflow-y-hidden hover:overflow-y-auto">
                    {/* Action tab */}
                    <div
                      className="space-y-4"
                      style={{
                        display: activeTab === "action" ? "block" : "none",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <a href="#" className="block" key={i}>
                          <div className="flex px-4 space-x-4">
                            <div className="relative flex-shrink-0">
                              <span className="inline-block p-2 overflow-visible rounded-full bg-primary-50 text-primary-light dark:bg-primary-darker">
                                <svg
                                  className="w-7 h-7"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                  />
                                </svg>
                              </span>
                              <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                            </div>
                            <div className="flex-1 overflow-hidden">
                              <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                                New project "Expense Tracker" created
                              </h5>
                              <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                                Looks like there might be a new theme soon
                              </p>
                              <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                                {" "}
                                9h ago{" "}
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* User tab */}
                    <div
                      className="space-y-4"
                      style={{
                        display: activeTab === "user" ? "block" : "none",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <a href="#" className="block" key={i}>
                          <div className="flex px-4 space-x-4">
                            <div className="relative flex-shrink-0">
                              <span className="relative z-10 inline-block overflow-visible rounded-full">
                                <img
                                  className="object-cover rounded-full w-9 h-9"
                                  src="build/images/avatar.jpg"
                                  alt="H"
                                />
                              </span>
                              <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                            </div>
                            <div className="flex-1 overflow-hidden">
                              <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                                Hackeath
                              </h5>
                              <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                                Release new version of Expense Tracker
                              </p>
                              <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                                {" "}
                                20d ago{" "}
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Backdrop */}
            {isSettingsPanelOpen && (
              <div
                onClick={() => setIsSettingsPanelOpen(false)}
                className="fixed inset-0 z-10 bg-primary-darker"
                style={{ opacity: 0.5 }}
                aria-hidden="true"
              ></div>
            )}

            {/* Panel */}
            {isSettingsPanelOpen && (
              <section
                tabIndex="-1"
                className="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
                aria-labelledby="settinsPanelLabel"
              >
                <div className="absolute left-0 p-2 transform -translate-x-full">
                  {/* Close button */}
                  <button
                    onClick={() => setIsSettingsPanelOpen(false)}
                    className="p-2 text-white rounded-md focus:outline-none focus:ring"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Panel content */}
                <div className="flex flex-col h-screen">
                  {/* Panel header */}
                  <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-8 space-y-4 border-b dark:border-primary-dark">
                    <span
                      aria-hidden="true"
                      className="text-gray-500 dark:text-primary"
                    >
                      <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </span>
                    <h2
                      id="settinsPanelLabel"
                      className="text-xl font-medium text-gray-500 dark:text-light"
                    >
                      Settings
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-hidden hover:overflow-y-auto">
                    {/* Theme */}
                    <div className="p-4 space-y-4 md:p-8">
                      <h6 className="text-lg font-medium text-gray-400 dark:text-light">
                        Mode
                      </h6>
                      <div className="flex items-center space-x-8">
                        {/* Light button */}
                        <button
                          onClick={setLightTheme}
                          className={`flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark ${
                            !isDark
                              ? "border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100"
                              : "text-gray-500 dark:text-primary-light"
                          }`}
                        >
                          <span>
                            <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          </span>
                          <span>Light</span>
                        </button>

                        {/* Dark button */}
                        <button
                          onClick={setDarkTheme}
                          className={`flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark ${
                            isDark
                              ? "border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100"
                              : "text-gray-500 dark:text-primary-light"
                          }`}
                        >
                          <span>
                            <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                              />
                            </svg>
                          </span>
                          <span>Dark</span>
                        </button>
                      </div>
                    </div>

                    {/* Colors */}
                    <div className="p-4 space-y-4 md:p-8">
                      <h6 className="text-lg font-medium text-gray-400 dark:text-light">
                        Colors
                      </h6>
                      <div>
                        <button
                          onClick={() => setColors("cyan")}
                          className="w-10 h-10 rounded-full"
                          style={{ backgroundColor: "var(--color-cyan)" }}
                        ></button>
                        <button
                          onClick={() => setColors("teal")}
                          className="w-10 h-10 rounded-full"
                          style={{ backgroundColor: "var(--color-teal)" }}
                        ></button>
                        <button
                          onClick={() => setColors("green")}
                          className="w-10 h-10 rounded-full"
                          style={{ backgroundColor: "var(--color-green)" }}
                        ></button>
                        <button
                          onClick={() => setColors("fuchsia")}
                          className="w-10 h-10 rounded-full"
                          style={{ backgroundColor: "var(--color-fuchsia)" }}
                        ></button>
                        <button
                          onClick={() => setColors("blue")}
                          className="w-10 h-10 rounded-full"
                          style={{ backgroundColor: "var(--color-blue)" }}
                        ></button>
                        <button
                          onClick={() => setColors("violet")}
                          className="w-10 h-10 rounded-full"
                          style={{ backgroundColor: "var(--color-violet)" }}
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Backdrop */}
            {isSearchPanelOpen && (
              <div
                onClick={closeSearchPanel}
                className="fixed inset-0 z-10 bg-primary-darker"
                style={{ opacity: 0.5 }}
                aria-hidden="true"
              ></div>
            )}

            {/* Panel */}
            {isSearchPanelOpen && (
              <section
                tabIndex="-1"
                className="fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
              >
                <div className="absolute right-0 p-2 transform translate-x-full">
                  {/* Close button */}
                  <button
                    onClick={closeSearchPanel}
                    className="p-2 text-white rounded-md focus:outline-none focus:ring"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <h2 className="sr-only">Search panel</h2>

                {/* Panel content */}
                <div className="flex flex-col h-screen">
                  {/* Panel header (Search input) */}
                  <div className="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-primary-darker dark:focus-within:text-light focus-within:text-gray-700">
                    <span className="absolute inset-y-0 inline-flex items-center px-4">
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                    <input
                      ref={searchInputRef}
                      type="text"
                      className="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-dark dark:border-transparent dark:text-light focus:outline-none focus:ring"
                      placeholder="Search..."
                    />
                  </div>

                  {/* Panel content (Search result) */}
                  <div className="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
                    <h3 className="py-2 text-sm font-semibold text-gray-600 dark:text-light">
                      History
                    </h3>

                    {historyItems.map((i) => (
                      <a href="#" key={i} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-10 h-10 rounded-lg"
                            src="build/images/cover-3.jpg"
                            alt="K-WD Dashboard"
                          />
                        </div>
                        <div className="flex-1 max-w-xs overflow-hidden">
                          <h4 className="text-sm font-semibold text-gray-600 dark:text-light">
                            K-WD Dashboard
                          </h4>
                          <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                          </p>
                          <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                            {" "}
                            Updated 3h ago.{" "}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <main className="h-screen bg-white dark:bg-darker ">
              <DashBoardPage />
              {/* <AddExpense/> */}
              {/* <ExpenseForm/> */}

              {/* Main footer */}
              <footer className="flex items-center justify-between p-4 bg-white border-t dark:bg-darker dark:border-primary-darker">
                <div>ExP &copy; 2024</div>
                <div>
                  Made by
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    HackEath
                  </a>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
