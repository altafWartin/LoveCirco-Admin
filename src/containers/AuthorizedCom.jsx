import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import User from "./User/User";
import Notifications from "./Notifications/Notifications";
import UserProfile from "./User/UserProfile";
import Login from "./Login/Login";
import DataAnalysis from "./DataAnalysis/DataAnalysis";
import Settings from "./Settings/Settings";
import CreateNewPlan from "./Settings/CreateNewPlan";
import UpdatePlan from "./Settings/UpdatePlan";


const AuthorizedCom = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to get current location

  // Retrieve token from localStorage on component mount
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setToken(accessToken);
    } else {
      // If token is not present, navigate to login
      navigate("/login");
    }
  }, [navigate]);

  // Check if current location is login page
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="w-full relative  overflow-hidden bg-lightpinkflex flex-col items-center justify-start  pb-[2.125rem] pr-[1.5rem] pl-[2.188rem] box-border gap-[0.875rem_0rem] tracking-[normal]">
      {!isLoginPage && <Navbar />}

      <main className="self-stretch flex flex-row  items-start justify-start gap-[0rem_0.875rem] max-w-full shrink-0 text-left text-[1.125rem] text-gray-200 font-gilroy">
        {!isLoginPage && <Sidebar />}{" "}
        <Routes>
          {/* Render DataAnalysis if token exists */}
          {token ? (
            <Route path="/" element={<DataAnalysis />} />
          ) : (
            // Otherwise, redirect to login
            <Route path="/" element={<Navigate to="/login" />} />
          )}

          {/* These routes are protected and require authentication */}
          <Route path="/" element={<DataAnalysis />} />

          <Route path="/user" element={<User />} />
          <Route path="/userProfile/:userId" element={<UserProfile />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/createNewPlan" element={<CreateNewPlan />} />
          <Route path="/settings/updatePlan/:planId" element={<UpdatePlan />} />

          <Route path="/notifications" element={<Notifications />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
};

export default AuthorizedCom;
