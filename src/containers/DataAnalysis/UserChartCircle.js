// UserChart.js

import React, { useEffect, useState  } from "react";
import * as echarts from "echarts";

const UserChart = () => {
  const [profiles, setProfiles] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [primeUsers, setPrimeUsers] = useState(0);
  const [unprimeUsers, setUnprimeUsers] = useState(0);
  const [blockedUsers, setBlockedUsers] = useState(0);
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log("profiles", profiles);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/getAllUsers`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch user profiles, status: ${response.status}`
        );
      }

      const data = await response.json();

      setProfiles(data.users);

      // Calculate user statistics
      const total = data.users.length;
      const prime = data.users.filter((user) => user.isSubscribed).length;
      const unprime = data.users.filter(
        (user) => !user.isSubscribed && !user.isBlocked
      ).length;
      const blocked = data.users.filter((user) => user.isBlocked).length;

      console.log("total", total);
      console.log("prime", prime);
      console.log("unprime", unprime);
      console.log("blocked", blocked);

      setTotalUsers(total);
      setPrimeUsers(prime);
      setUnprimeUsers(unprime);
      setBlockedUsers(blocked);
    } catch (error) {
      console.error("Error fetching user profiles:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once



  useEffect(() => {
    const dom = document.getElementById("chart-container");
    const myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });

    // Simulated data for user statistics
    const userStats = {
      totalUsers: totalUsers,
      primeUsers: primeUsers,
      unprimeUsers: unprimeUsers,
      blockedUsers: blockedUsers,
    };

    const option = {
      title: {
        text: "User Statistics",
        subtext: `Total user : ${totalUsers}`,
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        bottom: 10,
        left: "center",
        data: ["Prime Users", "Unprime Users", "Blocked Users"],
      },
      series: [
        {
          type: "pie",
          radius: "65%",
          center: ["50%", "50%"],
          selectedMode: "single",
          data: [
            { value: userStats.primeUsers, name: "Prime Users" },
            { value: userStats.unprimeUsers, name: "Unprime Users" },
            { value: userStats.blockedUsers, name: "Blocked Users" },
            {
              value:
                userStats.totalUsers -
                (userStats.primeUsers +
                  userStats.unprimeUsers +
                  userStats.blockedUsers),
            },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", () => {
      myChart.resize();
    });

    return () => {
      window.removeEventListener("resize", () => {
        myChart.resize();
      });
    };
  }, ); // Empty array ensures useEffect runs only once

  return (
    <div id="chart-container" style={{ width: "100%", height: "400px" }}></div>
  );
};

export default UserChart;
