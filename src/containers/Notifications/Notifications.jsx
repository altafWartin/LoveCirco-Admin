import React, { useState, useEffect, useRef } from "react";
import vector12 from "../../assets/vector-12.svg";
import group51 from "../../assets/group-5-1.svg";
import Select from "react-select";
import MultiSelect from "./MultiSelect";

import makeAnimated from "react-select/animated";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const animatedComponents = makeAnimated();

const Notifications = () => { const apiUrl = process.env.REACT_APP_API_URL;
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState(null);
  // const newAllUsers = allUsers
  const [notificationText, setNotificationText] = useState("");
  const [notificationTitle, setNotificationTitle] = useState("");
  // const [options, setOptions] = useState([]);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [selectedUsersValue, setSelectedUsersValue] = useState([]);
  // const [optionSelected, setOptionSelected] = useState([]);


  const notify = () => toast.success("Notification sent successfully!!!");
  const notif = () => toast.error("Error ");

  const options =
     users;
    // [
    //   { value: "zero", label: "Goranboy" },
    //   { value: "one", label: "Safikurd" },
    //   { value: "two", label: "Baku" },
    //   { value: "three", label: "Ganja" },
    //   { value: "four", label: "Shusha" },
    //   { value: "five", label: "Agdam" },
    // ];
  console.log("users", users);
  console.log("options", options);

  const [optionSelected, setSelected] = useState(null);

  const handleSelectChange = (selectedOptions) => {
    console.log("arrssrrss", selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value); // Declare selectedValues here

    // if (selectedOptions.length > 0) {
    //   let label = selectedOptions[0].label;
    //   console.log(label); // Output: "Select All"

    //   if (label === "Select All") {
    //     console.log("Selected all labels:", label);

    //     setSelectedUserIds(allUsers);
    //     // Add code here to perform any additional actions for selecting all labels
    //   } else {
    //     console.log("Selected label:", label);

    //     setSelectedUsersValue(selectedValues);
    //     setSelectedUsers(selectedOptions);
    //     setSelectedUserIds(selectedValues); // Use selectedValues here

    //     console.log(selectedOptions, "selected");
    //     // Add code here to handle selecting individual labels
    //   }
    // } else {
    //   console.log("Array is empty or does not contain expected data.");
    // }
    // console.log("Selected label:", label);

    setSelectedUsersValue(selectedValues);
    setSelectedUsers(selectedOptions);
    setSelectedUserIds(selectedValues); // Use selectedValues here

    console.log(selectedOptions, "selected");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
         `${apiUrl}/api/auth/allProfile`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json(); // Parse JSON response

        // Extracting user name and user id
        const usersWithRequiredFields = data.map((user) => ({
          value: user._id,
          label: user.username,
        }));
        console.log("usersWithRequiredFields", usersWithRequiredFields);

        // setOptions(usersWithRequiredFields);

        setUsers(usersWithRequiredFields); // Set users state with the extracted fields
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (selected) => {
    setSelected(selected);
    console.log("selected", selected);
    const selectedValues = selected.map(option => option.value);
    console.log("selectedValuesssssss", selectedValues);
    setSelectedUserIds(selectedValues)
  };

  // calll notification api

  const handleNotificationTitle = (event) => {
    const capitalizedValue =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setNotificationTitle(capitalizedValue);
  };

  const handleNotificationTextChange = (event) => {
    const capitalizedValue =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setNotificationText(capitalizedValue);
  };

  const handleNotificationSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting notification...");

    // Log the data being sent in the API request body
    console.log("API Request Body:", {
      notificationType: notificationTitle,
      userIds: selectedUserIds,
      notificationText: notificationText,
    });

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found in local storage");
    }
    // Perform API call here
    fetch("https://devv.legacyx.uk/api/auth/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken,

        // Add any other headers required by your API
      },
      body: JSON.stringify({
        notificationType: notificationTitle,
        userIds: selectedUserIds,
        notificationText: notificationText,
      }),
    })
      .then((response) => {
        // Handle response from API
        if (response.ok) {
          // Notification successfully sent
          console.log("Notification sent successfully");
          notify();
          // Clear input fields
          setNotificationTitle(""); // Assuming setSelectedOption is a state setter
          setSelectedUsers([]); // Assuming setSelectedUsers is a state setter
          setSelected([]);
          setNotificationText(""); // Assuming setNotificationText is a state setter
        } else {
          notif();
          // Notification failed
          console.error("Failed to send notification");
        }
        return response.json(); // Parse response body as JSON
      })
      .then((data) => {
        console.log("API Response:", data); // Log the parsed JSON response
        // window.location.reload(false);
      })
      .catch((error) => {
        // Handle error
        notif();
        console.error("Error:", error);
      });
  };

  return (
    <section class="flex-1 rounded-xl w-full ml-[19rem] mt-[8rem] bg-gray-200 flex flex-col items-start justify-start pt-[2.125rem] px-[2.125rem] pb-[24.625rem] box-border gap-[0.875rem_0rem] max-w-full text-left text-[1.125rem] text-white font-gilroy mq925:pt-[1.375rem] mq925:pb-[16rem] mq925:box-border mq925:max-w-full mq450:pt-[1.25rem] mq450:pb-[10.375rem] mq450:box-border">
      <ToastContainer className="text-[1rem]" />
      <div class="flex-1 flex flex-col w-full items-end justify-start  min-w-[27.125rem] max-w-full text-[1.375rem] mq700:min-w-full">
        <div class="flex  items-start  w-full justify-between  max-w-full text-[1.125rem] mq700:flex-wrap">
          <h1 class="m-0  relative text-inherit leading-[2.375rem] text-[40px] capitalize font-semibold font-inherit inline-block shrink-0 z-[1]  ">
            Notification
          </h1>{" "}
        </div>
      </div>

      <div class="self-stretch flex flex-row mt-7 flex-wrap items-start justify-start gap-[0rem_1.5rem] max-w-full">
        <div class="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem] min-w-[20.063rem] max-w-full">
          <div class="self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem]">
            <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
              Notification Title
            </div>
            <input
              type="text"
              placeholder="Notification Title"
              value={notificationTitle}
              onChange={handleNotificationTitle}
              className="w-full [border:none] [outline:none] flex justify-between placeholder:text-black  self-stretch h-[3.375rem] px-3 rounded-3xs flex flex-row items-start justify-start py-[1rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] text-gray-400 min-w-[15.625rem] z-[1]"
            />
          </div>
        </div>
        <div class="w-full flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem] min-w-[20.063rem] max-w-full">
          <div class="w-full self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem]">
            <div class=" w-full h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
              Select User's
            </div>
            <MultiSelect
           className="w-full  h-[0.75rem]"
              key="example_id"
              options={options}
              onChange={handleChange}
              value={optionSelected}
              isSelectAll={true}
              menuPlacement={"bottom"}
            />
          
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-col mt-4 items-start justify-start gap-[0.875rem_0rem]">
        <div class="h-[0.75rem] relative leading-[1.125rem] capitalize flex items-center shrink-0 z-[1]">
          Notification Text
        </div>
        <textarea
          class="w-full [border:none] [outline:none] z-0  self-stretch h-[12.375rem] rounded-3xs flex flex-row items-start justify-start py-[1.313rem] px-[1.125rem] box-border font-gilroy font-light text-[1.125rem] placeholder:text-black text-gray-400 min-w-[15.625rem] z-[1]"
          placeholder="Write Somthing.."
          value={notificationText}
          onChange={handleNotificationTextChange}
          type="text"
        />
      </div>
      <button
        onClick={(event) => handleNotificationSubmit(event)}
        class="cursor-pointer [border:none] mt-4 py-[1.063rem] pr-[2.563rem] pl-[2.625rem] bg-white rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-100"
      >
        <div class="h-[2.875rem] w-[8.813rem] relative rounded-3xs bg-white hidden"></div>
        <div class="relative text-[1.125rem] leading-[0.75rem] capitalize font-gilroy text-gray-200 text-left z-[2]">
          submit
        </div>
      </button>
    </section>
  );
};

export default Notifications;
