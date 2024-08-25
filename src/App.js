import "./App.css";
import React, { useEffect, useState } from "react";
import CoachAssignmentsTable from "./CoachAssignmentsTable";

const Table = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://node-sport-action-task-production.up.railway.app/api/participants?page=1&limit=10"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.participants); // Asumiendo que quieres la parte "participants" del JSON
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <CoachAssignmentsTable data={data} />
    </div>
  );
};

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 bg-gray-100 pt-8 h-screen">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h1 className="text-base font-semibold leading-6 text-gray-900">
//             ⚽ Coach Assignments
//           </h1>
//           <p className="mt-2 text-sm text-gray-700">
//             Report to track coach assignments across different venues over each
//             day.
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
//               <table className="min-w-full">
//                 <thead className="bg-white">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
//                     >
//                       Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Title
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Email
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Role
//                     </th>
//                     <th
//                       scope="col"
//                       className="relative py-3.5 pl-3 pr-4 sm:pr-3"
//                     >
//                       <span className="sr-only">Edit</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white">
//                   {locations.map((location) => (
//                     <Fragment key={location.name}>
//                       <tr className="border-t border-gray-200">
//                         <th
//                           scope="colgroup"
//                           colSpan={5}
//                           className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
//                         >
//                           {location.name}
//                         </th>
//                       </tr>
//                       {location.people.map((person, personIdx) => (
//                         <tr
//                           key={person.email}
//                           className={classNames(
//                             personIdx === 0
//                               ? "border-gray-300"
//                               : "border-gray-200",
//                             "border-t"
//                           )}
//                         >
//                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
//                             {person.name}
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {person.title}
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {person.email}
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {person.role}
//                           </td>
//                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
//                             <a
//                               href="#"
//                               className="text-indigo-600 hover:text-indigo-900"
//                             >
//                               Edit
//                               <span className="sr-only">, {person.name}</span>
//                             </a>
//                           </td>
//                         </tr>
//                       ))}
//                     </Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Table;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//     </div>
//   );
// }

// export default App;
