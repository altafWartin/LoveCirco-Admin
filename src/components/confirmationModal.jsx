import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook


const ConfirmationModal = ({
  title,
  showModal,
  hideModal,
  confirmModal,
  id,
  type,
  message,
  buttonLabel,
}) => {
  //   console.log("Title:", title);
  //   console.log("Show Modal:", showModal);
  //   console.log("Hide Modal:", hideModal);
  //   console.log("Confirm Modal:", confirmModal);
  console.log("ID:", id);
  console.log("Type:", type);
  console.log("Message:", message);
  console.log("Button Label:", buttonLabel);

  const apiUrl = process.env.REACT_APP_API_URL;


  const [alertMessage, setAlertMessage] = useState(message);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate(); // Initialize the useNavigate hook




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
        console.log("User deleted successfully:", data.message);
        setAlertMessage("User deleted successfully!");
        setIsSuccess(true);
        // Optionally hide the modal after a short delay
        setTimeout(() => {
            hideModal();
            navigate("/user"); // Navigate to the '/user' route after successful deletion
          }, 2000);
      } else {
        console.error(
          "Error deleting user:",
          data.message || "An error occurred"
        );
        setAlertMessage(data.message || "An error occurred");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Network error occurred:", error);
      setAlertMessage("Network error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  const blockOrUnblockUser = async (userId, action) => {
    console.log("blockOrUnblockUser", userId, action);
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
        setAlertMessage(data.message);
        setIsSuccess(true);
        setTimeout(() => {
          hideModal();
        }, 2000);
      } else {
        setAlertMessage(data.message || "An error occurred");
        setIsSuccess(false);
      }
    } catch (error) {
      setAlertMessage("Network error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  const subscribeUserProfile = async (userId, action) => {
    console.log(userId, action);
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
        setAlertMessage(data.message);
        setIsSuccess(true);
        setTimeout(() => {
          hideModal();
        }, 2000);
      } else {
        setAlertMessage(data.message || "An error occurred");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error in subscribeUserProfile:", error);
      setAlertMessage("Network error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  const handleConfirmClick = () => {
    if (buttonLabel === "Delete") {
      deleteUserProfile(id);
    } else if (buttonLabel === "Block") {
      blockOrUnblockUser(id, true);
    } else if (buttonLabel === "Unblock") {
      blockOrUnblockUser(id, false);
    } else if (buttonLabel === "Subscribe") {
      subscribeUserProfile(id, true);
    } else if (buttonLabel === "Unsubscribe") {
      subscribeUserProfile(id, false);
    } else {
      confirmModal(type, id);
    }
  };

  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-danger"> {message}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmClick}>
          {buttonLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
