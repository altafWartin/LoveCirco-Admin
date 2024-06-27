import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import ConfirmationModal from "../../components/confirmationModal";

// Utility function to format date
const formatDate = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const UserProfile = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [id, setId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalButtonLabel, setModalButtonLabel] = useState("");

  const { userId } = useParams();
  console.log(userId, "userid");
  const [profile, setProfile] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  console.log("profile", profile);
  const formattedDob = formatDate(profile.dob);
  const [apiCallMade, setApiCallMade] = useState(false);



  const fetchData = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }

      const response = await fetch(`${apiUrl}/api/getSingleProfile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: accessToken,
        },
        body: JSON.stringify({ _id: userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch single profile");
      }

      const data = await response.json();
      console.log("imageeeeeeeeeeeeeeee", data.profile[0].images[0]);
      setProfile(data.profile[0]);
      setProfilePicture(data.profile[0].images[0]);

      setApiCallMade(false); // Update state after API call
      console.log("single profile", data); // Log the fetched single profile data
      // Handle the fetched single profile data as needed
    } catch (error) {
      console.error("Error fetching single profile:", error);
    }
  };

  useEffect(() => {
    if (!apiCallMade) {
      fetchData(userId);
      // setApiCallMade(true);
    }
  }, [apiCallMade]); // Only re-run the effect if apiCallMade changes

  const handleShowModal = (id, title, message, buttonLabel) => {
    setShowModal(true);
    setId(id);
    setModalTitle(title);
    setModalMessage(message);
    setModalButtonLabel(buttonLabel);
  };

  const handleHideModal = () => {
    setShowModal(false);
    // Reset modal content when hiding modal
    setModalTitle("");
    setModalMessage("");
    setModalButtonLabel("");
    setApiCallMade(true);
    fetchData(userId);
  };

  const handleConfirm = (type, id) => {
    setApiCallMade(true);
    fetchData(userId);
    handleHideModal();
    // Perform deletion logic here
  };
  return (
    <div className="w-9/12 h-[1200px] ml-[19rem] mt-[2.3rem]">
      <div className="absolute top-[8.063rem] left-[22.563rem] rounded-[27.91px] bg-grays-white overflow-hidden flex flex-col items-start justify-start p-[2.187rem] text-[1.044rem]">
        <div className="flex flex-col items-end justify-start gap-[1.875rem]">
          <div className="w-[60.431rem] flex flex-row flex-wrap items-start justify-start gap-[3.562rem]">
            <div className="w-[60.431rem] relative h-[2.356rem]">
              <div className="absolute top-[2.269rem] left-[0rem] bg-whitesmoke-200 w-[60.431rem] h-[0.088rem]" />
              <div className="absolute top-[0rem] left-[0rem] flex flex-col items-center justify-start gap-[0.812rem]">
                <div className="relative font-medium">User Profile</div>
                <div className="w-[8.2rem] relative rounded-t-[13.95px] rounded-b-none bg-firebrick h-[0.263rem]" />
              </div>
            </div>
            <img
              className="w-[9.856rem] relative rounded-full h-[9.594rem] object-cover border-2 border-firebrick p-2"
              alt=""
              src={profilePicture}
            />

            <div className="flex flex-col items-start justify-start gap-[1.187rem] text-[1.131rem] text-gray-200 font-mulish">
              <div className="flex flex-row items-start justify-start gap-[2.25rem]">
                <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                  <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                    <div className="relative font-semibold z-[0]">Name</div>
                    <div className="w-[22.325rem] relative rounded-[20.93px] bg-grays-white box-border h-[3.488rem] z-[1] border-[1.4px] border-solid border-aliceblue-300" />
                    <div className="w-[7.313rem] absolute !m-[0] top-[3.138rem] left-[1.306rem] text-[1.044rem] font-regular text-darkgray-100 inline-block z-[2]">
                      {profile.name}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                    <div className="relative font-semibold z-[0]">
                      Phone Number
                    </div>
                    <div className="w-[22.325rem] relative h-[3.488rem] z-[1]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />
                    </div>
                    <div className="w-[8.063rem] absolute !m-[0] top-[3.138rem] left-[1.306rem] text-[1.044rem] font-regular text-darkgray-100 inline-block z-[2]">
                      {profile.phoneNo}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                    <div className="relative font-semibold z-[0]">Location</div>
                    <div className="w-[22.325rem] relative rounded-[20.93px] bg-grays-white box-border h-[3.488rem] z-[1] border-[1.4px] border-solid border-aliceblue-300" />
                    <div className="w-[18.563rem]  absolute !m-[0] top-[3.138rem] left-[1.306rem] text-[1.044rem] font-regular text-darkgray-100 inline-block z-[2]">
                      {profile.location}
                    </div>
                    <img
                      className="w-[0.875rem] absolute !m-[0] top-[3.575rem] left-[19.706rem] h-[0.438rem] z-[3]"
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                  <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                    <div className="relative font-semibold z-[0]">Email</div>
                    <div className="w-[22.325rem] relative h-[3.488rem] z-[1]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />
                    </div>
                    <div className="w-[12.563rem] absolute !m-[0] top-[3.138rem] left-[1.306rem] text-[1.044rem] font-regular text-darkgray-100 inline-block z-[2]">
                      {profile.email}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                    <div className="relative font-semibold z-[0]">
                      Date of Birth
                    </div>
                    <div className="w-[22.325rem] relative h-[3.488rem] z-[1]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />
                    </div>
                    <div className="w-[8.313rem] absolute !m-[0] top-[3.138rem] left-[1.306rem] text-[1.044rem] font-regular text-darkgray-100 inline-block z-[2]">
                      {/* 25 January 1990 */}
                      {formattedDob}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                    <div className="relative font-semibold z-[0]">Job</div>
                    <div className="w-[22.325rem] relative h-[3.488rem] z-[1]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />
                    </div>

                    <div className="w-[18.563rem]  absolute !m-[0] top-[3.138rem] left-[1.306rem] text-[1.044rem] font-regular text-darkgray-100 inline-block z-[2]">
                      {profile.job}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                <div className="relative font-semibold z-[0]">About Me</div>
                <div className="w-[46.925rem] relative h-[5.613rem] z-[1]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[46.925rem] h-[5.613rem] border-[1.4px] border-solid border-aliceblue-300" />
                </div>
                <div className="w-[12.563rem] absolute !m-[0] top-[3.138rem] left-[1.306rem] text-[1.044rem] font-regular text-darkgray-100 inline-block z-[2]">
                  {profile.about}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.375rem] text-center text-[1.306rem] text-grays-white">
            <ConfirmationModal
              showModal={showModal}
              hideModal={handleHideModal}
              confirmModal={handleConfirm}
              id={profile._id}
              type="item" // Change this to the appropriate type
              title={modalTitle}
              message={modalMessage}
              buttonLabel={modalButtonLabel}
            />
            <div className="w-[17.875rem] relative h-[3.438rem]">
              {profile.isSubscribed ? (
                <div className="w-[17.875rem] relative h-[3.438rem]">
                  <button
                    onClick={() =>
                      handleShowModal(
                        id,
                        "Unsubscribe Confirmation",
                        "Are you sure you want to unsubscribe this user?",
                        "Unsubscribe"
                      )
                    }
                    className="absolute top-[0rem] left-[0rem] rounded-[12.56px] bg-crimson-100 border-0 text-grays-white overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[3.625rem]"
                  >
                    <div className="relative font-medium">Unsubscribe</div>
                  </button>
                </div>
              ) : (
                <div className="w-[16.875rem] relative h-[3.438rem]">
                  <button
                    onClick={() =>
                      handleShowModal(
                        id,
                        "Subscribe Confirmation",
                        "Are you sure you want to subscribe this user?",
                        "Subscribe"
                      )
                    }
                    className="absolute top-[0rem] left-[0rem] rounded-[12.56px] bg-crimson-100 border-0 text-grays-white overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[3.625rem]"
                  >
                    <div className="relative font-medium">Subscribe</div>
                  </button>
                </div>
              )}
            </div>
            <div className="w-[12.8rem] relative h-[3.438rem]">
              {profile.isBlocked ? (
                <div className="w-[11.188rem] relative h-[3.438rem]">
                  <button
                    onClick={() =>
                      handleShowModal(
                        id,
                        "Unblock Confirmation",
                        "Are you sure you want to unblock this user?",
                        "Unblock"
                      )
                    }
                    className="absolute top-[0rem] left-[0rem] rounded-[12.56px] bg-crimson-100 border-0 text-grays-white overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[3.625rem]"
                  >
                    <div className="relative font-medium">Unblock</div>
                  </button>
                </div>
              ) : (
                <div className="w-[11.188rem] relative h-[3.438rem]">
                  <button
                    onClick={() =>
                      handleShowModal(
                        id,
                        "Block Confirmation",
                        "Are you sure you want to block this user?",
                        "Block"
                      )
                    }
                    className="absolute top-[0rem] left-[0rem] rounded-[12.56px] bg-crimson-100 border-0 text-grays-white overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[3.625rem]"
                  >
                    <div className="relative font-medium">Block</div>
                  </button>
                </div>
              )}
            </div>{" "}
            <div className="w-[11.188rem] relative h-[3.438rem]">
              <button
                className="absolute top-[0rem] left-[0rem] rounded-[12.56px] bg-crimson-100 border-0 text-grays-white overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[3.625rem]"
                onClick={() =>
                  handleShowModal(
                    id,
                    "Delete Confirmation",
                    "Are you sure you want to delete this user?",
                    "Delete"
                  )
                }
              >
                <div className="relative font-medium">Delete</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
