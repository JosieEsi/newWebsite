// import React, { useState } from "react";
// import ApexCharts from "react-apexcharts";
// import { CL, CR, vongoing } from "../assets/images";

// const Dashboard = () => {
//   const [profileDropdown, setProfileDropdown] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleProfileDropdown = () => {
//     setProfileDropdown(!profileDropdown);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Toggle dropdown menu
//   const handleDropdownClick = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   const chartOptions = {
//     series: [
//       {
//         name: "2023",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//       {
//         name: "2024",
//         data: [11, 32, 45, 32, 34, 52, 41],
//       },
//     ],
//     chart: {
//       height: 150,
//       type: "area",
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//   };

//   const pieOptions = {
//     series: [44, 55, 41, 17, 15],
//     chart: {
//       width: 380,
//       type: "pie",
//     },
//     labels: ["Age 5-10", "Age 11-15", "Age 16-18", "Male", "Female"],
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 100,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   };

//   const lineOptions = {
//     series: [
//       {
//         name: "Participants",
//         data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
//       },
//     ],
//     chart: {
//       height: 150,
//       type: "line",
//       zoom: {
//         enabled: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//     title: {
//       text: "Reading Participation Over Time",
//       align: "left",
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//   };

//   return (
//     <div className="flex min-h-screen mt-32">
//       {/* Sidebar */}
//       <aside className={`bg-gray-800 p-4 ${sidebarOpen ? "w-64" : "w-20"}`}>
//         <nav>
//           <ul>
//             <li className="text-white">
//               <button onClick={toggleSidebar}>Toggle Sidebar</button>
//             </li>
//             <ul className="mt-6">
//               {[1, 2, 3].map((i) => (
//                 <li key={i} className="mb-4">
//                   <a
//                     href="#"
//                     className="block py-2 px-4 hover:bg-gray-700"
//                     onClick={() => handleDropdownClick(i)}
//                   >
//                     Menu {i}
//                   </a>
//                   {activeDropdown === i && (
//                     <div className="pl-4 mt-2">
//                       <a href="#" className="block py-1 px-2 hover:bg-gray-700">
//                         Submenu 1
//                       </a>
//                       <a href="#" className="block py-1 px-2 hover:bg-gray-700">
//                         Submenu 2
//                       </a>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <div className="flex-1 p-6">
//         <nav className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold">Dashboard</h1>
//           </div>

//           {/* Profile Section */}
//           <div className="relative">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="cursor-pointer"
//               onClick={toggleProfileDropdown}
//             />
//             {profileDropdown && (
//               <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-4">
//                 <a href="#" className="block">
//                   Profile
//                 </a>
//                 <a href="#" className="block">
//                   Logout
//                 </a>
//               </div>
//             )}
//           </div>
//         </nav>

//         <main>
//           {/* Project Status Section */}
//           <section className="project-status my-6">
//             <h1 className="text-xl font-semibold mb-4">Projects</h1>
//             <div className="grid grid-cols-3 gap-4">
//               <div className="card bg-gray-100 p-4 rounded-lg">
//                 <img src={vongoing} alt="VSLA" className="rounded-lg" />
//                 <p className="title font-bold">VSLA</p>
//                 <p className="status text-gray-600">Ongoing</p>
//               </div>
//               <div className="card bg-purple-100 p-4 rounded-lg">
//                 <img src={CL} alt="Child Labour" className="rounded-lg" />
//                 <p className="title font-bold">Child Labour</p>
//                 <p className="status text-gray-600">Ongoing</p>
//               </div>
//               <div className="card bg-gray-100 p-4 rounded-lg">
//                 <img src={CR} alt="Community Reading" className="rounded-lg" />
//                 <p className="title font-bold">Community Reading</p>
//                 <p className="status text-gray-600">Ongoing</p>
//               </div>
//             </div>
//           </section>

//           {/* Dashboard Title and Breadcrumb */}
//           <h1 className="title text-3xl font-bold my-4">Dashboard</h1>
//           <ul className="breadcrumbs flex space-x-2 text-gray-500">
//             <li>
//               <a href="#" className="hover:underline">
//                 Home
//               </a>
//             </li>
//             <li>/</li>
//             <li>
//               <a href="#" className="active text-gray-700">
//                 Dashboard
//               </a>
//             </li>
//           </ul>

//           {/* Info Data Section */}
//           <div className="grid grid-cols-3 gap-6 my-6">
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">1500</h2>
//               <p className="text-gray-500">Number of readers</p>
//             </div>
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">234</h2>
//               <p className="text-gray-500">VSLA participants</p>
//             </div>
//             <div className="card-container bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold">465</h2>
//               <p className="text-gray-500">Child labour</p>
//             </div>
//           </div>

//           {/* Charts */}
//           <div className="grid grid-cols-2 gap-6">
//             <div id="chart" className="bg-white p-6 rounded-lg shadow-lg">
//               <ApexCharts
//                 options={chartOptions}
//                 series={chartOptions.series}
//                 type="area"
//                 height={150}
//               />
//             </div>

//             <div id="pieChart" className="bg-white p-6 rounded-lg shadow-lg">
//               <ApexCharts
//                 options={pieOptions}
//                 series={pieOptions.series}
//                 type="pie"
//                 width={380}
//               />
//             </div>

//             <div
//               id="lineChart"
//               className="bg-white p-6 rounded-lg shadow-lg col-span-2"
//             >
//               <ApexCharts
//                 options={lineOptions}
//                 series={lineOptions.series}
//                 type="line"
//                 height={150}
//               />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import ApexCharts from "react-apexcharts";
import { CL, CR, vongoing } from "../assets/images";

const Dashboard = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null); // Added state for activeDropdown

  const toggleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle dropdown menu
  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const chartOptions = {
    series: [
      {
        name: "2023",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "2024",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 150,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
  };

  const pieOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Age 5-10", "Age 11-15", "Age 16-18", "Male", "Female"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const lineOptions = {
    series: [
      {
        name: "Participants",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 150,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Reading Participation Over Time",
      align: "left",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <div className="flex min-h-screen mt-32">
      {/* Sidebar */}
      <aside className={`bg-gray-800 p-4 ${sidebarOpen ? "w-64" : "w-20"}`}>
        <nav>
          <ul>
            <li className="text-white">
              <button onClick={toggleSidebar}>Toggle Sidebar</button>
            </li>
            <ul className="mt-6">
              {[1, 2, 3].map((i) => (
                <li key={i} className="mb-4">
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-700"
                    onClick={() => handleDropdownClick(i)}
                  >
                    Menu {i}
                  </a>
                  {activeDropdown === i && (
                    <div className="pl-4 mt-2">
                      <a href="#" className="block py-1 px-2 hover:bg-gray-700">
                        Submenu 1
                      </a>
                      <a href="#" className="block py-1 px-2 hover:bg-gray-700">
                        Submenu 2
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6">
        <nav className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>

          {/* Profile Section */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="cursor-pointer"
              onClick={toggleProfileDropdown}
            />
            {profileDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-4">
                <a href="#" className="block">
                  Profile
                </a>
                <a href="/pdaafrica" className="block">
                  Logout
                </a>
              </div>
            )}
          </div>
        </nav>

        <main>
          {/* Project Status Section */}
          <section className="project-status my-6">
            <h1 className="text-xl font-semibold mb-4">Projects</h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="card bg-gray-100 p-4 rounded-lg">
                <img src={vongoing} alt="VSLA" className="rounded-lg" />
                <p className="title font-bold">VSLA</p>
                <p className="status text-gray-600">Ongoing</p>
              </div>
              <div className="card bg-purple-100 p-4 rounded-lg">
                <img src={CL} alt="Child Labour" className="rounded-lg" />
                <p className="title font-bold">Child Labour</p>
                <p className="status text-gray-600">Ongoing</p>
              </div>
              <div className="card bg-gray-100 p-4 rounded-lg">
                <img src={CR} alt="Community Reading" className="rounded-lg" />
                <p className="title font-bold">Community Reading</p>
                <p className="status text-gray-600">Ongoing</p>
              </div>
            </div>
          </section>

          {/* Dashboard Title and Breadcrumb */}
          <h1 className="title text-3xl font-bold my-4">Dashboard</h1>
          <ul className="breadcrumbs flex space-x-2 text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="active text-gray-700">
                Dashboard
              </a>
            </li>
          </ul>

          {/* Info Data Section */}
          <div className="grid grid-cols-3 gap-6 my-6">
            <div className="card-container bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold">1500</h2>
              <p className="text-gray-500">Number of readers</p>
            </div>
            <div className="card-container bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold">234</h2>
              <p className="text-gray-500">VSLA participants</p>
            </div>
            <div className="card-container bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold">465</h2>
              <p className="text-gray-500">Child labour</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            <div id="chart" className="bg-white p-6 rounded-lg shadow-lg">
              <ApexCharts
                options={chartOptions}
                series={chartOptions.series}
                type="area"
                height={150}
              />
            </div>

            <div id="pieChart" className="bg-white p-6 rounded-lg shadow-lg">
              <ApexCharts
                options={pieOptions}
                series={pieOptions.series}
                type="pie"
                width={380}
              />
            </div>

            <div
              id="lineChart"
              className="bg-white p-6 rounded-lg shadow-lg col-span-2"
            >
              <ApexCharts
                options={lineOptions}
                series={lineOptions.series}
                type="line"
                height={150}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;