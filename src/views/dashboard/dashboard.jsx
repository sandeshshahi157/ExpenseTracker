import React from "react";
import ExpensePieChart from './component/piecharts'
export default function DashBoardPage() {
  return (
    <>
      {/* Content header */}
      <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      {/* Content */}
      <div className="mt-2">
        {/* State cards */}
        <div class="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
         
         <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
           <div>
             <h6
               class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
             >
               Total
             </h6>
             <span class="text-xl font-semibold">$30,000</span>
             <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
               +4.4%
             </span>
           </div>
           <div>
             <span>
               <svg
                 class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                 />
               </svg>
             </span>
           </div>
         </div>
         
         
         <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
           <div>
             <h6
               class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
             >
               Share 
             </h6>
             <span class="text-xl font-semibold">50,021</span>
             <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
               +2.6%
             </span>
           </div>
           <div>
             <span>
               <svg
                 class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                 />
               </svg>
             </span>
           </div>
         </div>
         
         
         <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
           <div>
             <h6
               class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
             >
               Other
             </h6>
             <span class="text-xl font-semibold">45,021</span>
             <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
               +3.1%
             </span>
           </div>
           <div>
             <span>
               <svg
                 class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                 />
               </svg>
             </span>
           </div>
         </div>
         
         
         <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
           <div>
             <h6
               class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
             >
               Fooding
             </h6>
             <span class="text-xl font-semibold">20,516</span>
             <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
               +3.1%
             </span>
           </div>
           <div>
             <span>
               <svg
                 class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                 />
               </svg>
             </span>
           </div>
         </div>
         </div>

        {/* Charts */}
        <div className="grid grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-3">
          {/* Bar chart card */}
          <div className="col-span-2 bg-white rounded-md dark:bg-darker" data-x-data="{ isOn: false }">
           <ExpensePieChart></ExpensePieChart>
         
          </div>

          {/* Doughnut chart card */}
          <div className="bg-white rounded-md dark:bg-darker" data-x-data="{ isOn: false }">
            {/* ... (rest of the content) */}
    
       
          </div>
        </div>

        {/* Two grid columns */}
        <div className="grid grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-3">
          {/* Active users chart */}
      
          <div className="col-span-1 bg-white rounded-md dark:bg-darker">
            {/* ... (rest of the content) */}
          </div>

      
          <div className="col-span-2 bg-white rounded-md dark:bg-darker" data-x-data="{ isOn: false }">
   
      
          
          </div>
        </div>
      </div>
    </>
  );
}






