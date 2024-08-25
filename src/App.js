import "./App.css";
import React, { useEffect, useState } from "react";
import CoachAssignmentsTable from "./CoachAssignmentsTable";

const App = () => {
  const [data, setData] = useState(null);
  const [allVenues, setAllVenues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://node-sport-action-task-production.up.railway.app/api/participants?page=1&limit=100"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.participants);
        setAllVenues(result.allVenues);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };

    fetchData();
  }, []);

  if (!data || allVenues.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 pt-8 pb-8  h-screen">
      <CoachAssignmentsTable data={data} allVenues={allVenues} />
    </div>
  );
};

export default App;
