import React from "react";

const CoachAssignmentsTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      {Object.keys(data).map((date) => (
        <div key={date} className="mb-6">
          <h2 className="text-lg font-semibold">{date}</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b border-gray-200">
                  Coach
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200">
                  Total
                </th>
                {Object.keys(data[date][0].venues).map((venue) => (
                  <th
                    key={venue}
                    className="px-4 py-2 text-left border-b border-gray-200"
                  >
                    {venue}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data[date].map((coachData, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {coachData.coach}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {coachData.total}
                  </td>
                  {Object.keys(coachData.venues).map((venue) => (
                    <td
                      key={venue}
                      className="px-4 py-2 border-b border-gray-200"
                    >
                      {coachData.venues[venue] || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CoachAssignmentsTable;
