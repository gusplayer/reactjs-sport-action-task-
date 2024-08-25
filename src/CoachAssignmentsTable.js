import React from "react";

const CoachAssignmentsTable = ({ data, allVenues }) => {
  return (
    <div className="px-10 sm:px-10 lg:px-10 bg-gray-100 ">
      <div className="sm:flex sm:items-center bg-gray-100">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">
            👋 Welcome to Coach Assignments
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Report to track coach assignments across different venues over each
            day.
          </p>
        </div>
      </div>
      {Object.keys(data).map((date) => (
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <span className="inline-flex px-4 py-2 mb-2 items-center rounded-md bg-green-50  text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
                {date}
              </span>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full bg-white pb-8">
                  <thead className="bg-white">
                    <tr>
                      <th className="px-4 py-2 text-left border-b border-gray-200 text-sm font-semibold text-gray-900 ">
                        Coach
                      </th>
                      <th className="px-4 py-2 text-left border-b border-gray-200 text-sm font-semibold text-gray-900 ">
                        Total
                      </th>
                      {allVenues.map((venue) => (
                        <th
                          key={venue}
                          className="px-4 py-2 text-left border-b border-gray-200 text-sm font-semibold text-gray-900"
                        >
                          {venue}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data[date].map((coachData, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                          {coachData.coach}
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-500">
                          {coachData.total}
                        </td>
                        {allVenues.map((venue) => (
                          <td
                            key={venue}
                            className="px-4 py-2 border-b border-gray-200 text-sm text-gray-500"
                          >
                            {coachData.venues[venue] || ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoachAssignmentsTable;
