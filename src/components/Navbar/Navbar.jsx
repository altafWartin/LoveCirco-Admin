import React, { useState, useEffect } from "react";

import image1 from "../../assets/image-4-2-1@2x.png";
import logo from "../../assets/Icon/logo.svg";
import group from "../../assets/group.svg";
import ellipse from "../../assets/ellipse-1@2x.png";
import { useNavigate,Link } from "react-router-dom";

import { IconButton, Menu, MenuItem } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // Navigate to /login
    navigate("/login");
  };
  const [userDataa, setUserDataa] = useState("");

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('user');
    
    if (userData) {
      // Parse the JSON string back into an object
      const parsedUserData = JSON.parse(userData);
      
      // Update state with parsed user data
      setUserDataa(parsedUserData);
      
      // Now you can use parsedUserData object as needed
      console.log('User Data:', parsedUserData);
    } else {
      console.log('No user data found in localStorage.');
    }
  }, []); // Empty dependency array ensures useEffect runs only once on component mount




  return (
    <header className="bg-crimson-100 w-full h-20 text-xs text-lightsteelblue font-mulish rounded-xl mt-3 flex items-center justify-between px-4">
     <Link to="/">

      <img 
        className="h-16 flex items-center mt-3" // Adjust height as needed
        loading="lazy"
        alt="Logo"
        src={logo}
      />     </Link>
      <div className="flex-1 flex justify-end items-center">
        <div className="bg-whitesmoke-100 flex items-center justify-end pl-4 pr-2 py-2 rounded-full">
          <img
            className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-cover"
            alt="User Avatar"
            src={ellipse}
          />
          <div className="ml-2">
            <div className="tracking-wide text-crimson-100 leading-5 capitalize font-medium text-xs md:text-sm lg:text-base">
              {userDataa.name}
            </div>
            <div className="text-grays-200 text-2xs md:text-xs lg:text-sm">
              Admin Member
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-6 ml-4">
            <IconButton
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleOpenMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>{" "}
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
