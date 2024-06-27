import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const FeedChart = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);
  const [feeds, setFeeds] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("Access token not found in local storage");
        }
        const response = await fetch(
          `${apiUrl}/api/entity/feed`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: accessToken,
            },
          }
        );
        const feedData = await response.json(); // Await the JSON parsing
        console.log("feedData", feedData); // Log the parsed data
        setFeeds(feedData);
        setUsers(feedData.allMedia);
        console.log(users, "users");
      } catch (error) {
        console.error("Error fetching feed data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      renderChart();
    }
  }, [users]);

  const countUsersByMonth = () => {
    const currentDate = new Date();
    const monthlyCounts = Array(6).fill(0);
    users.forEach((user) => {
      const createdAtDate = new Date(user.lastUpdatedAt);
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
    const ctx = document.getElementById("Chart");

    if (chartInstance === null) {
      const newChartInstance = new Chart(ctx, {
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
              label: "Feeds",
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
                text: "Number of Feeds",
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
      setChartInstance(newChartInstance);
    } else {
      chartInstance.data.labels = [
        getMonthName(5),
        getMonthName(4),
        getMonthName(3),
        getMonthName(2),
        getMonthName(1),
        getMonthName(0),
      ];
      chartInstance.data.datasets[0].data = monthlyCounts;
      chartInstance.update();
    }
  };
console.log(users.length,"------",feeds.allMedia);


  return (
    <div>
        {users.length > 0 && (
          <div className="flex-1 rounded-[18.28px] mt-5 bg-gray-100 shadow-[0px_0px_13.71px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start pt-[1.5rem] pb-[1.188rem] pr-[0.813rem] pl-[1rem] box-border relative gap-[2.688rem_0rem] min-w-[20.188rem] max-w-full z-[1] mq675:gap-[2.688rem_0rem]">
          <h2>Feeds </h2>
            <canvas id="Chart" width="400" height="200"></canvas>
          </div>
        )}
      </div>
    
  );
};

export default FeedChart;
