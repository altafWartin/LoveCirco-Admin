import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const UserChart = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/auth/allProfile`
        );
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Users changed:", users);
    renderChart();
  }, [users]);

  const countUsersByMonth = () => {
    const currentDate = new Date();
    const monthlyCounts = Array(6).fill(0);
    users.forEach((user) => {
      const createdAtDate = new Date(user.createdAt);
      const diffMonths =
        (currentDate.getFullYear() - createdAtDate.getFullYear()) * 12 +
        (currentDate.getMonth() - createdAtDate.getMonth());
      if (diffMonths < 6) {
        monthlyCounts[5 - diffMonths]++;
      }
    });
    return monthlyCounts;
  };

  const getMonthName = (monthIndex) => {
    const currentDate = new Date();
    const targetDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - monthIndex,
      1
    );
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[targetDate.getMonth()];
  };

  const renderChart = () => {
    const monthlyCounts = countUsersByMonth();
    if (chartRef.current !== null) {
      chartRef.current.destroy(); // Destroy previous chart
    }
    const ctx = document.getElementById("userChart");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          getMonthName(5),
          getMonthName(4),
          getMonthName(3),
          getMonthName(2),
          getMonthName(1),
          getMonthName(0),
        ],
        datasets: [
          {
            label: "User Registrations",
            data: monthlyCounts,
            backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue color
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Users",
            },
          },
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
        },
      },
    });
  };

  return (
    <div class="flex-1 w-full rounded-[18.28px] mt-5 bg-gray-100 shadow-[0px_0px_13.71px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-[1.5rem] pb-[1.188rem] pr-[0.813rem] pl-[1rem] box-border relative gap-[2.688rem_0rem] min-w-[20.188rem] max-w-full z-[1] mq675:gap-[2.688rem_0rem]">
      <div className=" w-full  px-2 d-flex justify-content-between">
        <h2 className="mr-">User Registration</h2>
        <h2>{users.length}</h2>
      </div>
      <canvas id="userChart" width="400" height="200"></canvas>
    </div>
  );
};

export default UserChart;
