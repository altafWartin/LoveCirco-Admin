import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import star from "../../assets/star.svg";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useNavigate } from "react-router-dom"; // Importing useNavigate hook
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  radios: "10px",
  transform: "translate(-50%, -50%)",
  width: 470,
  bgcolor: "gray",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const User = () => { const apiUrl = process.env.REACT_APP_API_URL;
  const [open, setOpen] = React.useState(false);
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubcribed, setIsSubcribed] = useState("");
  const [isBlocked, setIsBlocked] = useState("");
  const [apiCallMade, setApiCallMade] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate(); // Initializing the useNavigate hook


  const handleOpen = (userId, isSubcribed, isBlocked) => {
    setOpen(true);
    setUserId(userId); // Set the userId in state when opening the modal
    setIsSubcribed(isSubcribed);
    setIsBlocked(isBlocked);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/getAllUsers`, {
        method: "POST",
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch user profiles, status: ${response.status}`
        );
      }

      const data = await response.json();

      setProfiles(data.users);
    } catch (error) {
      console.error("Error fetching user profiles:", error);
    }
  };

  useEffect(() => {
    if (!apiCallMade) {
      fetchData();
      setApiCallMade(true);
    }
  }, [apiCallMade]); // Only re-run the effect if apiCallMade changes

  const subscribUserProfile = async (userId, action) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }

      const response = await fetch(`${apiUrl}/api/subscribeUserbyAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${accessToken}`,
        },
        body: JSON.stringify({ userId, action }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);

        setErrorMessage("");

        fetchData(); // Fetch updated user list after deletion
        setApiCallMade(true); // Update state after API call
        handleClose();
      } else {
        setMessage("");
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error in subscribUserProfile:", error);
      setMessage("");
      setErrorMessage("Network error occurred");
    }
  };

  const deleteUserProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }
      const response = await fetch(`${apiUrl}/api/deleteUserbyAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${accessToken}`,
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);

        setErrorMessage("");
        setApiCallMade(true); // Update state after API call

        fetchData(); // Fetch updated user list after deletion
        handleClose();
      } else {
        setMessage("");
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage("");
      setErrorMessage("Network error occurred");
    }
  };

  const blockOrUnblock = async (userId, action) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }

      const response = await fetch(`${apiUrl}/api/blockUserbyAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${accessToken}`,
        },
        body: JSON.stringify({ userId, action }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setErrorMessage("");
        setApiCallMade(true);
        fetchData();
        handleClose();
      } else {
        setMessage("");
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage("");
      setErrorMessage("Network error occurred");
    }
  };

  const fetchSingleProfile = async (userId) => {
    navigate(`/userProfile/${userId}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (message) {
      notify();
    }
  }, [message]);

  const notify = () => toast.success(message);

  return (
    <div class="flex-1 h-[100vh] rounded-xl  ml-[19rem] mt-[0rem] text-black  flex flex-col items-center justify-start  px-[2.125rem] pb-[5.125rem] box-border gap-[1.375rem_0rem] max-w-[calc(100%_-_300px)] mq900:pt-[1.563rem] mq900:pb-[3.313rem] mq900:box-border mq900:max-w-full mq450:pt-[1.25rem] mq450:pb-[2.125rem] mq450:box-border">
      <ToastContainer className="text-[1rem]" />

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Action
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="d-flex justify-end gap-3">
                {isBlocked ? (
                  <button
                    onClick={() => blockOrUnblock(userId, "false")}
                    className="px-4 border-0"
                  >
                    Unblock
                  </button>
                ) : (
                  <button
                    onClick={() => blockOrUnblock(userId, "true")}
                    className="px-4 border-0"
                  >
                    Block
                  </button>
                )}

                {isSubcribed ? (
                  <button
                    onClick={() => subscribUserProfile(userId, "false")}
                    className="px-4 border-0"
                  >
                    Unsubscribe
                  </button>
                ) : (
                  <button
                    onClick={() => subscribUserProfile(userId, "true")}
                    className="px-4 border-0"
                  >
                    Subscribe
                  </button>
                )}
                <button
                  onClick={() => {
                    deleteUserProfile(userId);
                    handleClose(); // Close the modal after deleting
                  }}
                  className="px-4 border-0"
                >
                  Delete
                </button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div class="w-full flex flex-row items-center justify-between pt-[0rem] px-[0rem] pb-[0.188rem] box-border gap-[1.25rem] text-[2.375rem]">
        <h1 class="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block z-[1] mq900:text-[1.875rem] mq900:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
          users
        </h1>
        <div className="d-flex gap-4  text-darkslategray-100">
          <div class="rounded-3xs flex flex-row items-center justify-start py-[1.063rem] pr-[1.188rem] pl-[1.063rem] gap-[1.125rem] z-[1] text-[1.125rem] border-[0.6px] border-solid border-white">
            <div class="flex flex-row items-start justify-start gap-[0rem_0.813rem]">
              <div class="relative leading-[0.75rem] capitalize z-[1]">
                Users :
              </div>
              <div class="relative leading-[0.75rem] capitalize z-[1]">
                {profiles.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[500px] w-full overflow-y-auto ">
        {profiles.map((profile) => {
          if (!profile.isAdmin) {
            return (
              <div
                key={profile._id}
                className="w-full rounded-sm bg-gray-100 mb-3 no-underline  text-darkslategray-100 cursor-pointer shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-between py-[0.875rem] pr-[1.938rem] pl-[0.875rem] box-border gap-[1.25rem] z-[1]"
              >
                <div className="w-full flex flex-row items-center justify-between gap-[0rem_1.813rem]">
                  <div
                    onClick={() => fetchSingleProfile(profile._id)}
                    className="flex w-full item-center"
                  >
                    <div className=" w-[350px] flex items-center gap-4 ">
                      <Stack direction="row" spacing={2}>
                        <Avatar sx={{ width: 56, height: 56 }}>
                          <LazyLoadImage
                            alt={profile.name}
                            src={
                              profile.images && profile.images.length > 0
                                ? profile.images[0]
                                : ""
                            }
                            effect="blur"
                            width={56}
                            height={56}
                            placeholderSrc="/placeholder.jpg" // Ensure you have a placeholder image
                          />
                        </Avatar>
                      </Stack>
                      <div className="h-[0.75rem]  relative leading-[1.125rem] capitalize flex items-center justify-start z-[2]">
                        {profile.name}{" "}
                        {profile.isSubscribed && (
                          <div>
                            <img
                              className="ml-3 relative object-contain z-[2]"
                              loading="lazy"
                              alt=""
                              src={star}
                            />{" "}
                            (Prime member)
                          </div>
                        )}
                      </div>{" "}
                    </div>
                    <div className=" w-[250px] flex items-center gap-4 ">
                      <div className="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 whitespace-nowrap z-[2]">
                        {profile && profile.email && profile.email.length > 20
                          ? profile.email.substring(0, 20)
                          : profile && profile.email}
                      </div>
                    </div>
                    <div className=" w-[250px] flex items-center gap-4 ">
                      <div className="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 whitespace-nowrap z-[2]">
                        {profile.phoneNo}
                      </div>
                    </div>{" "}
                  </div>
                  <div
                    className="w-8"
                    onClick={() =>
                      handleOpen(
                        profile._id,
                        profile.isSubscribed,
                        profile.isBlocked
                      )
                    }
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
                </div>
              </div>
            );
          }
          return null; // Return null for profiles that are admins
        })}
      </div>
    </div>
  );
};

export default User;
