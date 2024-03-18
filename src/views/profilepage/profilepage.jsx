import React from "react";

const ProfilePage = () => {
  return (
    <main className="h-full">
      {/* Content header */}
      <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
        <h1 className="text-2xl font-mono">Profile</h1>
      </div>

      {/* Component */}
      <div className="container mx-auto m-20 antialiased dark:text-gray-300">
        <div>
          <div className="dark:text-gray-300 relative w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img
                src="src/assets/logo_d.png"
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-36 h-36 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16">
              <h1 className="font-bold dark:text-gray-300 text-center text-3xl text-gray-900">
                Hackeath Software company
              </h1>
              <p className="text-center text-sm text-gray-400 font-medium">
                Software company
              </p>
              <p>
                <span></span>
              </p>
              <div className="my-5 px-6">
                <a
                  href="#"
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  Connect with <span className="font-bold">@hackeath</span>
                </a>
              </div>
              <div className="flex justify-between items-center my-5 px-6">
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Facebook user
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Twitter user
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Instagram
                </a>
                <a
                  href=""
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Email
                </a>
              </div>

              <div className="w-full dark:text-gray-300">
                <h3 className="dark:text-gray-300 font-medium text-gray-900 text-left px-6">
                  Your activities
                </h3>

                <div class=" card pt-5">
                  <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-90">
                    <li class="bg-white rounded-md p-4 shadow-md flex items-center">
                      <img src="" alt=" Icon" class="w-8 rounded-xl h-8 mr-2" />
                      <div>
                        <p class="text-lg font-semibold text-gray-800">
                          Feb 2023
                        </p>
                        <p class="text-gray-600">Rs.500</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
