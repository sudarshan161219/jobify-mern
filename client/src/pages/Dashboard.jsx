import React, { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const res = await fetch("/");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {fetchData()}, [])
  return <h1>Dashboard</h1>;
};

export default Dashboard;
