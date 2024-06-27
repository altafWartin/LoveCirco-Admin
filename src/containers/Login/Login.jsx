import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/image-4-2-1@2x.png";
import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import { useNavigate } from "react-router-dom";

const Login = () => { const apiUrl = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
     `${apiUrl}/api/adminLogin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      console.log(JSON.stringify({ email, password }));
      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      console.log(JSON.stringify(data));

      const { token, user } = data;

      // Store the access token in local storage
      localStorage.setItem("accessToken", token);

      // Store the user details in local storage
      localStorage.setItem("user", JSON.stringify(user));

      // Set the token in state
      setToken(user.token);
      console.log(token);

      console.log("Token:", token); // Log the token
      navigate("/");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };
  return (
    <div class="w-full relative px-[20px] pt-[50px] pb-[50px]  h-[100vh] text-left text-[1.125rem] text-white font-gilroy  shadow-[0px_4px_74px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[5.75rem] box-border gap-[1rem] tracking-[normal] mq700:gap-[1rem] mq950:flex-wrap mq975:gap-[1rem]">
      <form
        onSubmit={handleSubmit}
        class="m-0  max-w-[400px] rounded-3xl bg-crimson-100 flex flex-col items-center justify-start mt-10 pt-[1.75rem] pb-[2.13rem] pr-[2.94rem] pl-[3rem] box-border gap-[1rem] max-w-full z-[2] mq700:pl-[1.5rem] mq700:pr-[1.44rem] mq700:box-border mq950:pt-[1.25rem] mq950:pb-[1.38rem] mq950:box-border"
      >
        <div class="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
          <img
            class="w-[150px] h-[36px] relative z-[3]"
            loading="eager"
            alt=""
            src={logo}
          />

          <h1 class="m-0 flex-1 relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit flex items-center z-[1] mq925:text-[1.875rem] mq925:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
            Login
          </h1>

          <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[1.19rem] relative gap-[0.25rem] z-[3]">
            <div class="h-[19px] relative leading-[18px] capitalize flex items-center shrink-0 z-[1]">
              username
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              class="w-full bg-gray-500 self-stretch h-[48px] text-white rounded-3xs flex flex-row items-start justify-start py-[13px] px-[18px] box-border font-gilroy font-light text-[1.125rem]  min-w-[300px] z-[1]"
              placeholder="username"
            />
          </div>
          <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0.19rem] relative gap-[0.25rem] z-[3]">
            <div class="h-[19px] relative leading-[18px] capitalize flex items-center shrink-0 z-[1]">
              password
            </div>
            <input
              class="w-full bg-gray-500 self-stretch h-[48px] rounded-3xs flex flex-row items-start justify-start py-[13px] px-[18px] box-border font-gilroy font-light text-[1.125rem] text-white min-w-[250px] z-[1]"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div class="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
          <button
            type="submit"
            class="no-underline cursor-pointer bg-white self-stretch my-4 rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[3] hover:bg-chocolate"
          >
            <div class="relative text-[20px] leading-[40px] text-gray-200 capitalize font-semibold font-poppins text-left z-[4]">
              Sign In
            </div>
          </button>
        
        </div>
      </form>
    </div>
  );
};

export default Login;
