import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { Carousel } from "rsuite";
import "rsuite/Carousel/styles/index.css";



const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [updatCards, setUpdatCards] = useState(false);
  console.log("card", cards);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [placement, setPlacement] = React.useState("bottom");
  const [shape, setShape] = React.useState("bar");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembershipPlans = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/getMembershipPlans`
        );
        const data = await response.json();

        console.log(data.result);
        setCards(data.result);
        setUpdatCards(false)
      } catch (error) {
        console.error("Error fetching membership plans:", error);
      }
    };

    fetchMembershipPlans();
  }, [updatCards]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + cards.length) % cards.length
    );
  };

  const UpdatePlan = (planId) => {

    console.log("planId:" + planId);
    navigate(`/settings/updatePlan/${planId}`);

  }


  const DeletePlan = async (planId) => {
    try {
      const response = await fetch(`${apiUrl}/api/deleteMembershipPlan/${planId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setUpdatCards(true)
      console.log(`Membership plan with ID ${planId} deleted successfully.`);
      // Optionally, you can perform additional actions after successful deletion
      // For example, you can redirect to another page or refresh the plan list.
    } catch (error) {
      console.error("Error deleting membership plan:", error);
      // Handle error state or display an error message to the user
    }
  };



  return (
    <div className="flex justify-center">
      <Carousel
        key={`${placement}.${shape}`}
        placement={placement}
        shape={shape}
        barStyle={{ backgroundColor: 'red' }} // Change bar color inline
        className="custom-slider w-[300px] rounded-xl h-[800px] bg-white border-white max-w-full mx-auto "
      >
        {cards.map((card, index) => (
          <div
            className={`flex-none w-1/3 p-4  bg-transparent border-b-12 border-black shadow-md ${index % 2 == 0 ? "  text-white" : " text-crimson-200"
              }`}
            key={card.id || index}
          >
            <div
              className={`rounded-[15.64px] overflow-hidden flex flex-row items-start justify-start p-[2.5rem] border-[0.8px] ${(currentIndex + index) % 2 == 0
                ? "bg-crimson-200 border-white"
                : "bg-white border-solid"
                }`}
            >
              <div className="w-[10.625rem] relative h-[15.625rem]">
                <div className="absolute top-[0rem] left-[0rem] flex flex-col items-center justify-start">
                  <div className="w-[10.644rem] h-[16.625rem]" />
                </div>
                <div className="absolute top-[0rem] left-[0rem] flex flex-col items-center justify-start">
                  <div className="flex flex-col items-center justify-start gap-[1.25rem]">
                    <div className="flex flex-col items-center justify-start gap-[0.625rem]">
                      <div className="relative font-semibold">{card.name}</div>
                      <div className="w-[7.625rem] relative h-[2.813rem] text-[2.25rem]">
                        <div className="absolute top-[0rem] left-[2rem] flex flex-row items-center justify-center gap-[0.312rem]">
                          <div className="relative font-extrabold">$29</div>

                        </div>
                      </div>
                      <div className="w-[10.831rem] left-2 relative h-[3.375rem] text-left text-[0.831rem]">
                        <div className="absolute top-[0rem] left-[0rem] flex flex-col items-start justify-start gap-[1.25rem]">
                          <div className="w-[10.831rem] relative h-[1.188rem]">
                            <div className="absolute capitalize top-[0rem] left-[1.956rem] leading-[1.173rem] font-semibold">
                              {card.description}
                            </div>
                            <img
                              className="absolute top-[0.344rem] left-[0rem] w-[0.881rem] h-[0.525rem]"
                              alt=""
                              src="/checkmark.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[0.625rem] text-left text-[0.831rem]">
                      <button onClick={() => DeletePlan(card._id)}
                        className={`w-[9.938rem]  relative h-[2.688rem] ${index % 2 === 0
                          ? "bg-crimson-200 rounded-full text-white border-white"
                          : "bg-white rounded-full  text-crimson-100 border-crimson-100"
                          }`}
                      >
                        <div className="absolute top-[0rem] left-[0rem] rounded-81xl overflow-hidden flex flex-row items-center justify-center py-[0.75rem] px-[3.687rem] border-[0.8px]">
                          <b className="relative leading-[1.173rem]">Delete</b>
                        </div>
                      </button>

                      <button onClick={() => UpdatePlan(card._id)} // Use an arrow function to invoke UpdatePlan with card._id
                        className={`w-[9.938rem]  relative h-[2.688rem] ${(currentIndex + index) % 2 === 0
                          ? "bg-crimson-200 rounded-full text-white border-white"
                          : "bg-white rounded-full text-crimson-100 border-crimson-100"
                          }`}
                      >
                        <div className="absolute top-[0rem] left-[0rem] rounded-81xl overflow-hidden flex flex-row items-center justify-center py-[0.75rem] px-[3.687rem] border-[0.8px]">
                          <b className="relative leading-[1.173rem]">Update</b>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

    </div>
  );
};

export default MultiCardCarousel;
