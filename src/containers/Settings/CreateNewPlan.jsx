import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const CreateNewPlan = () => {
  // Initialize state for each key in the membership plan data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [priceWithoutDiscount, setPriceWithoutDiscount] = useState("");
  const [duration, setDuration] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      price,
      priceWithoutDiscount,
      duration,
    };

    console.log("withoutapi", data);

    try {
      const response = await fetch(`${apiUrl}/api/createMembershipPlan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("Membership plan created successfully!", responseData);
        navigate('/settings'); // Navigate to the /settings page


      } else {
        // Handle error (e.g., show an error message)
        console.error("Error creating membership plan:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating membership plan:", error.message);
    }
  };
  return (
    <section class="flex-1 ml-[19rem]  rounded-xl  flex flex-row items-start justify-start py-[2.375rem] px-[2.125rem] box-border gap-[0rem_1.375rem] min-h-[55.188rem] max-w-[calc(100%_-_300px)] text-left text-[2.375rem] text-white font-gilroy mq925:flex-wrap mq925:pt-[1.563rem] mq925:pb-[1.563rem] mq925:box-border mq925:max-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
      {" "}
      <div className="absolute top-[8.3rem] left-[29rem] rounded-[27.91px] bg-grays-white overflow-hidden flex flex-col items-start justify-start p-[2.187rem] text-[1.044rem]">
        <div className="flex flex-col items-end justify-start gap-[2.812rem]">
          <div className="w-[47.625rem] left-[250px] relative h-[2.375rem]">
            <div className="absolute top-[2.25rem] left-[0rem] bg-whitesmoke-200 w-[47.625rem] h-[0.125rem]" />
            <div className="absolute top-[0rem] left-[0rem] flex flex-col items-center justify-start gap-[0.812rem]">
              <div className="relative text-firebrick font-medium">
                Creating a New Subscription Plan
              </div>
              <div className="w-[14.2rem] relative rounded-t-[13.95px] rounded-b-none bg-firebrick h-[0.263rem]" />
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[1.875rem] text-[1.131rem] text-gray-200 font-mulish">
            <div className="w-[47.65rem] flex flex-row flex-wrap items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-start justify-start gap-[3rem]">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                        <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                          <div className="relative font-semibold z-[0]">
                            Plan Name
                          </div>
                          <input value={name}
                            onChange={(e) => setName(e.target.value)} type="text" placeholder="Gold" className="w-[22.325rem] px-3 top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />
                        </div>
                        <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                          <div className="relative font-semibold z-[0]">
                            Price
                          </div>
                          <input value={price}
                            onChange={(e) => setPrice(Number(e.target.value))} type="text" placeholder="Price" className="w-[22.325rem] px-3 top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                      <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                        <div className="relative font-semibold z-[0]">
                          Duration
                        </div>
                        <input value={duration}
                          onChange={(e) => setDuration(Number(e.target.value))}
                          type="text" placeholder="Duration" className="w-[22.325rem] px-3 top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />
                      </div>
                      <div className="flex flex-col items-start justify-start relative gap-[0.562rem]">
                        <div className="relative font-semibold z-[0]">
                          Price Without Discount
                        </div>
                        <input value={priceWithoutDiscount}
                          onChange={(e) => setPriceWithoutDiscount(Number(e.target.value))}
                          type="text" placeholder="Price Without Discount" className="w-[22.325rem] px-3 top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />

                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[47.625rem] flex flex-col items-start justify-start relative gap-[0.562rem]">
                  <div className="relative font-semibold z-[0]">
                    Description
                  </div>
                  <textarea value={description}
                    onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" className=" w-full px-3 pt-3 top-[0rem] left-[0rem] rounded-[20.93px] bg-grays-white box-border w-[22.325rem] h-[3.488rem] border-[1.4px] border-solid border-aliceblue-300" />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-center text-[1.306rem] text-grays-white font-regular">
              <div className="w-[10.188rem] relative h-[3.438rem]">
                <button onClick={handleSubmit} className="absolute top-[0rem] border-0 text-white left-[0rem] rounded-[12.56px] bg-crimson-100 overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[3.625rem]">
                  <div className="relative font-medium">save</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNewPlan;
