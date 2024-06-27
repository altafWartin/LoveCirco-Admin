import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import UserChartCircle from "./UserChartCircle"

import svgjsline1438 from "../../assets/svgjsline1438.svg";
import sliderContainer from "../../assets/slider-container.svg";
import svgjsline1393 from "../../assets/svgjsline1393.svg";
import inputFC from "../../assets/input-form-container.svg";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserChart from "./UserChart";
import FeedChart from "./FeedChart";

const DataAnalysis = () => {
  return (
    <div className="w-full relative h-[64rem] overflow-hidden text-left text-[0.875rem] text-firebrick font-regular">
      <div className="absolute top-[3.063rem] left-[22.563rem] flex flex-col items-start justify-start gap-[1.562rem] text-[1.5rem] text-gray-300">
        <div className="flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start py-[0.437rem] px-[0rem]">
            <div className="w-[15.25rem] relative h-[1.813rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold">
                Dashboard Overview
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.875rem] text-[1rem] text-lightslategray-100">
            <div className="w-[13.75rem] rounded-mini bg-grays-white box-border flex flex-col items-start justify-start p-[1rem] gap-[0.75rem] border-[1px] border-solid border-aliceblue-100">
              <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem]"
                  alt=""
                  src="/group-514939.svg"
                />
                <div className="relative font-medium">Followers</div>
              </div>
              <div className="relative text-[1.5rem] font-semibold text-gray-300">
                245.678
              </div>
              <div className="w-[11rem] flex flex-row items-center justify-start gap-[0.5rem] text-[0.875rem] text-royalblue-100">
                <img
                  className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
                <div className="relative">
                  <span className="font-semibold">{`10,2% `}</span>
                  <span className="text-lightslategray-100">
                    than last month
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[13.75rem] rounded-mini bg-grays-white box-border flex flex-col items-start justify-start p-[1rem] gap-[0.75rem] border-[1px] border-solid border-aliceblue-100">
              <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                <div className="w-[1.5rem] relative h-[1.5rem]">
                  <div className="absolute top-[0rem] left-[0rem] bg-grays-white w-[1.5rem] h-[1.5rem]" />
                  <img
                    className="absolute h-[70%] w-[79.58%] top-[15%] right-[10.42%] bottom-[15%] left-[10%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
                <div className="relative font-medium">Likes</div>
              </div>
              <div className="relative text-[1.5rem] font-semibold text-gray-300">
                20.432
              </div>
              <div className="w-[11rem] flex flex-row items-center justify-start gap-[0.5rem] text-[0.875rem] text-royalblue-100">
                <img
                  className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
                <div className="relative">
                  <span className="font-semibold">{`12,6% `}</span>
                  <span className="text-lightslategray-100">
                    than last month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserChartCircle />
        <div className="w-[29.25rem] relative h-[18.888rem] text-right text-[0.775rem] text-slategray font-manrope">
          {/* <div className="absolute top-[0rem] left-[0rem] shadow-[0px_2.7px_3.55px_rgba(227,_227,_227,_0.29)] w-[45.25rem] h-[18.888rem]"> */}
          {/* <div className="absolute top-[0rem] left-[0rem] rounded-[8.89px] bg-grays-white w-[45.25rem] h-[18.888rem]" /> */}
          {/* <div className="absolute top-[5rem] left-[2.919rem] h-[8.888rem] flex flex-col items-start justify-start gap-[1.537rem]"> */}
          {/* <div className="w-[2rem] relative tracking-[0.02em] leading-[1.111rem] font-semibold flex items-center"> */}
          {/* 600 */}
          {/* </div> */}
          {/* <div className="w-[2rem] relative tracking-[0.02em] leading-[1.111rem] font-semibold flex items-center"> */}
          {/* 400 */}
          {/* </div> */}
          {/* <div className="w-[2rem] relative tracking-[0.02em] leading-[1.111rem] font-semibold flex items-center"> */}
          {/* 200 */}
          {/* </div> */}
          {/* <div className="w-[2rem] relative tracking-[0.02em] leading-[1.111rem] font-semibold flex items-center"> */}
          {/* 0 */}
          {/* </div> */}
          {/* </div> */}
          {/* <img */}
          {/* className="absolute top-[5rem] left-[7.806rem] w-[34.45rem] h-[8.888rem]" */}
          {/* alt="" */}
          {/* src="/divs.svg" */}
          {/* /> */}
          {/* <b className="absolute top-[2.219rem] left-[2.919rem] text-[1.113rem] tracking-[0.02em] leading-[1.111rem] flex font-regular text-firebrick text-left items-center w-[7.063rem]"> */}
          {/* Audience */}
          {/* </b> */}
          {/* <div className="absolute top-[2.219rem] left-[33.719rem] text-[0.888rem] tracking-[0.02em] leading-[1.111rem] font-semibold flex items-center w-[6.569rem]"> */}
          {/* Last 6 Days */}
          {/* </div> */}
          {/* <img */}
          {/* className="absolute top-[2.219rem] left-[40.869rem] w-[1.463rem] h-[1.113rem]" */}
          {/* alt="" */}
          {/* src="/sort-small.svg" */}
          {/* /> */}
          {/* <div className="absolute top-[15.55rem] left-[7.738rem] flex flex-row items-start justify-start gap-[2.387rem] text-left"> */}
          {/* <div className="w-[2.444rem] flex flex-col items-center justify-start"> */}
          {/* <div className="relative tracking-[0.02em] leading-[1.111rem] font-semibold"> */}
          {/* Sun */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="w-[2.388rem] flex flex-col items-center justify-center"> */}
          {/* <div className="relative tracking-[0.02em] leading-[1.111rem] font-semibold"> */}
          {/* Mon */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="w-[2.388rem] flex flex-col items-center justify-start"> */}
          {/* <div className="relative tracking-[0.02em] leading-[1.111rem] font-semibold"> */}
          {/* Tue */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="w-[2.388rem] flex flex-col items-center justify-start"> */}
          {/* <div className="relative tracking-[0.02em] leading-[1.111rem] font-semibold"> */}
          {/* Wed */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="w-[2.331rem] flex flex-col items-center justify-start"> */}
          {/* <div className="relative tracking-[0.02em] leading-[1.111rem] font-semibold"> */}
          {/* Thu */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="w-[2.388rem] flex flex-col items-center justify-end"> */}
          {/* <div className="relative tracking-[0.02em] leading-[1.111rem] font-semibold"> */}
          {/* Fri */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* <img */}
          {/* className="absolute top-[9.5rem] left-[32.919rem] w-[3.138rem] h-[4.388rem]" */}
          {/* alt="" */}
          {/* src="/bar.svg" */}
          {/* /> */}
          {/* <img */}
          {/* className="absolute top-[7.581rem] left-[7.775rem] rounded-[26.66px] w-[34.519rem] h-[5.5rem]" */}
          {/* alt="" */}
          {/* src="/graph.svg" */}
          {/* /> */}
          {/* <div className="absolute top-[9.056rem] left-[33.863rem] rounded-[50%] bg-grays-white w-[1.169rem] h-[0.888rem]" /> */}
          {/* <div className="absolute top-[9.275rem] left-[34.156rem] rounded-[50%] bg-slateblue w-[0.581rem] h-[0.444rem]" /> */}
          {/* <div className="absolute top-[7.388rem] left-[32.55rem] rounded-[5.33px] bg-royalblue-100 flex flex-row items-center justify-center py-[0.056rem] px-[0.725rem] opacity-[0.9] text-center text-grays-white"> */}
          {/* <b className="relative leading-[1.278rem]">263</b> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      <div className="absolute top-[3.063rem] left-[55.375rem] rounded-2xl bg-grays-white box-border w-[17.5rem] h-[54.125rem] overflow-hidden text-black-100 border-l-[1px] border-solid border-black-10">
        <div className="absolute top-[1rem] left-[1rem] w-[15.5rem] flex flex-col items-start justify-start gap-[0.25rem]">
          <div className="self-stretch rounded-boundvariablesdata4 flex flex-row flex-wrap items-center justify-start py-boundvariablesdata2 px-boundvariablesdata1 text-[1rem] text-firebrick">
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] font-semibold">
                Notifications
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem]">
            <div className="rounded-radius-8 bg-primary-blue flex flex-row items-center justify-center p-[0.25rem]">
              <img
                className="w-boundvariablesdata8 relative h-boundvariablesdata8"
                alt=""
                src="/bugbeetle.svg"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                You fixed a bug.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                Just now
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem]">
            <div className="rounded-radius-8 bg-primary-purple flex flex-row items-center justify-center p-[0.25rem]">
              <img
                className="w-boundvariablesdata8 relative h-boundvariablesdata8"
                alt=""
                src="/user.svg"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                New user registered.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                59 minutes ago
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem]">
            <div className="rounded-radius-8 bg-primary-blue flex flex-row items-center justify-center p-[0.25rem]">
              <img
                className="w-boundvariablesdata8 relative h-boundvariablesdata8"
                alt=""
                src="/bugbeetle.svg"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                You fixed a bug.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                12 hours ago
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem]">
            <div className="rounded-radius-8 bg-primary-purple flex flex-row items-center justify-center p-[0.25rem]">
              <img
                className="w-boundvariablesdata8 relative h-boundvariablesdata8"
                alt=""
                src="/broadcast.svg"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                Andi Lane contact to you.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                Today, 11:59 AM
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[18.75rem] left-[1rem] w-[15.5rem] flex flex-col items-start justify-start gap-[0.25rem]">
          <div className="self-stretch rounded-boundvariablesdata4 flex flex-row flex-wrap items-center justify-start py-boundvariablesdata2 px-boundvariablesdata1 z-[0] text-[1rem] text-firebrick">
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] font-semibold">
                Activities
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem] z-[1]">
            <div className="rounded-radius-8 flex flex-row items-center justify-center">
              <img
                className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/abstract03@2x.png"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                Changed the style.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                Just now
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem] z-[2]">
            <div className="rounded-radius-8 flex flex-row items-center justify-center">
              <img
                className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/female03@2x.png"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                Released a new version.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                59 minutes ago
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem] z-[3]">
            <div className="rounded-radius-8 flex flex-row items-center justify-center">
              <img
                className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/male02@2x.png"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                Submitted a bug.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                12 hours ago
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem] z-[4]">
            <div className="rounded-radius-8 flex flex-row items-center justify-center">
              <img
                className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/3d03@2x.png"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                Modified A data in Page X.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                Today, 11:59 AM
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-boundvariablesdata3 flex flex-row flex-wrap items-start justify-start p-[0.5rem] gap-[0.5rem] z-[5]">
            <div className="rounded-radius-8 flex flex-row items-center justify-center">
              <img
                className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/abstract04@2x.png"
              />
            </div>
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
                Deleted a page in Project X.
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] text-black-40">
                Feb 2, 2024
              </div>
            </div>
          </div>
          <div className="w-[0.063rem] !m-[0] absolute top-[5rem] left-[1.188rem] h-[12.063rem] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[2.5rem] z-[6]">
            <div className="self-stretch flex-1 relative rounded-boundvariablesdata6 bg-black-10" />
            <div className="self-stretch flex-1 relative rounded-boundvariablesdata6 bg-black-10" />
            <div className="self-stretch flex-1 relative rounded-boundvariablesdata6 bg-black-10" />
            <div className="self-stretch flex-1 relative rounded-boundvariablesdata6 bg-black-10" />
          </div>
        </div>
        <div className="absolute top-[40.125rem] left-[1rem] w-[15.5rem] h-[14rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-boundvariablesdata4 w-[15.5rem] flex flex-row flex-wrap items-center justify-start py-boundvariablesdata2 px-boundvariablesdata1 box-border text-[1rem] text-firebrick">
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
              <div className="self-stretch relative leading-[1.25rem] font-semibold">
                Contacts
              </div>
            </div>
          </div>
          <div className="absolute top-[2.5rem] left-[0rem] rounded-boundvariablesdata3 w-[15.5rem] flex flex-row flex-wrap items-center justify-start p-[0.5rem] box-border">
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-row flex-wrap items-center justify-start gap-[0.5rem]">
              <div className="rounded-radius-8 flex flex-row items-center justify-center">
                <img
                  className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/female06@2x.png"
                />
              </div>
              <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
                <div className="self-stretch relative leading-[1.25rem]">
                  Natali Craig
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[5.25rem] left-[0rem] rounded-boundvariablesdata3 w-[15.5rem] flex flex-row flex-wrap items-center justify-start p-[0.5rem] box-border">
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-row flex-wrap items-center justify-start gap-[0.5rem]">
              <div className="rounded-radius-8 flex flex-row items-center justify-center">
                <img
                  className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/male01@2x.png"
                />
              </div>
              <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
                <div className="self-stretch relative leading-[1.25rem]">
                  Drew Cano
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[8rem] left-[0rem] rounded-boundvariablesdata3 w-[15.5rem] flex flex-row flex-wrap items-center justify-start p-[0.5rem] box-border">
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-row flex-wrap items-center justify-start gap-[0.5rem]">
              <div className="rounded-radius-8 flex flex-row items-center justify-center">
                <img
                  className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/female01@2x.png"
                />
              </div>
              <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
                <div className="self-stretch relative leading-[1.25rem]">
                  Andi Lane
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[10.75rem] left-[0rem] rounded-boundvariablesdata3 w-[15.5rem] flex flex-row flex-wrap items-center justify-start p-[0.5rem] box-border">
            <div className="flex-1 rounded-boundvariablesdata4 flex flex-row flex-wrap items-center justify-start gap-[0.5rem]">
              <div className="rounded-radius-8 flex flex-row items-center justify-center">
                <img
                  className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/male04@2x.png"
                />
              </div>
              <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
                <div className="self-stretch relative leading-[1.25rem]">
                  Koray Okumus
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[13.5rem] left-[0rem] rounded-boundvariablesdata3 w-[15.5rem] h-[2.5rem] flex flex-row flex-wrap items-center justify-start p-[0.5rem] box-border">
            <div className="w-[3.313rem] rounded-boundvariablesdata4 hidden flex-row flex-wrap items-center justify-start gap-[0.5rem]">
              <div className="rounded-radius-8 flex flex-row items-center justify-center">
                <img
                  className="w-boundvariablesdata5 relative rounded-boundvariablesdata6 h-boundvariablesdata5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/female04@2x.png"
                />
              </div>
              <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
                <div className="self-stretch relative leading-[1.25rem]">
                  Kate Morrison
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[29.25rem] left-[22.625rem] rounded-[16.53px] bg-grays-white box-border w-[45.188rem] h-[19.438rem] text-[0.688rem] border-[1.1px] border-solid border-aliceblue-100"> */}
      {/* <div className="absolute top-[1.625rem] left-[1.625rem] w-[29.23rem] flex flex-row items-center justify-start gap-[1.656rem]"> */}
      {/* <div className="flex-1 relative text-[1.238rem] leading-[1.516rem] font-semibold"> */}
      {/* Activity Pages */}
      {/* </div> */}
      {/* <div className="flex flex-row items-start justify-start gap-[1.1rem] text-gray-300"> */}
      {/* <div className="flex flex-row items-center justify-start gap-[0.412rem]"> */}
      {/* <div className="w-[0.55rem] relative rounded-[44.09px] bg-royalblue-100 h-[0.55rem] overflow-hidden shrink-0" /> */}
      {/* <div className="relative leading-[0.827rem]">Viewers</div> */}
      {/* </div> */}
      {/* <div className="flex flex-row items-center justify-start gap-[0.412rem]"> */}
      {/* <div className="w-[0.55rem] relative rounded-[44.09px] bg-aliceblue-200 h-[0.55rem] overflow-hidden shrink-0" /> */}
      {/* <div className="relative leading-[0.827rem]">Followers</div> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="rounded-[11.02px] flex flex-row items-center justify-start py-[0.687rem] px-[0.825rem] gap-[0.55rem] text-lightslategray-100 border-[1.1px] border-solid border-aliceblue-100"> */}
      {/* <div className="relative leading-[0.827rem]">Weekly</div> */}
      {/* <img */}
      {/* className="w-[0.825rem] relative h-[0.825rem]" */}
      {/* alt="" */}
      {/* src="/icon2.svg" */}
      {/* /> */}
      {/* </div> */}
      {/* </div> */}
      {/* <img */}
      {/* className="absolute top-[5.513rem] left-[0rem] max-h-full w-[42.438rem]" */}
      {/* alt="" */}
      {/* src="/vector-1.svg" */}
      {/* /> */}
      {/* <div className="absolute top-[7.188rem] left-[1.625rem] w-[41.563rem] h-[10.563rem] text-[0.825rem] text-lightslategray-100"> */}
      {/* <div className="absolute top-[0rem] left-[0rem] w-[33.756rem] flex flex-col items-start justify-start gap-[2.756rem]"> */}
      {/* <div className="w-[39.131rem] flex flex-row items-end justify-start gap-[1.1rem]"> */}
      {/* <div className="w-[2.206rem] relative leading-[0.964rem] inline-block shrink-0"> */}
      {/* 200 */}
      {/* </div> */}
      {/* <img */}
      {/* className="flex-1 relative max-w-full overflow-hidden max-h-full" */}
      {/* alt="" */}
      {/* src="/vector-2.svg" */}
      {/* /> */}
      {/* </div> */}
      {/* <div className="w-[39.131rem] flex flex-row items-end justify-start gap-[1.1rem]"> */}
      {/* <div className="w-[2.206rem] relative leading-[0.964rem] inline-block shrink-0"> */}
      {/* 100 */}
      {/* </div> */}
      {/* <img */}
      {/* className="flex-1 relative max-w-full overflow-hidden max-h-full" */}
      {/* alt="" */}
      {/* src="/vector-2.svg" */}
      {/* /> */}
      {/* </div> */}
      {/* <div className="w-[39.131rem] flex flex-row items-end justify-start gap-[1.1rem]"> */}
      {/* <div className="w-[2.206rem] relative leading-[0.964rem] inline-block shrink-0"> */}
      {/* 0 */}
      {/* </div> */}
      {/* <img */}
      {/* className="flex-1 relative max-w-full overflow-hidden max-h-full" */}
      {/* alt="" */}
      {/* src="/vector-2.svg" */}
      {/* /> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="absolute top-[0.963rem] left-[3.306rem] flex flex-row items-end justify-start gap-[2.187rem]"> */}
      {/* <div className="flex flex-col items-center justify-start gap-[1.1rem]"> */}
      {/* <div className="flex flex-row items-end justify-start"> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-royalblue-100 h-[7.575rem] overflow-hidden shrink-0" /> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-aliceblue-200 h-[2.481rem] overflow-hidden shrink-0" /> */}
      {/* </div> */}
      {/* <div className="relative leading-[0.964rem]">Mon</div> */}
      {/* </div> */}
      {/* <div className="flex flex-col items-center justify-start gap-[1.1rem]"> */}
      {/* <div className="flex flex-row items-end justify-start"> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-firebrick h-[6.063rem] overflow-hidden shrink-0" /> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-aliceblue-200 h-[1.794rem] overflow-hidden shrink-0" /> */}
      {/* </div> */}
      {/* <div className="relative leading-[0.964rem]">Tue</div> */}
      {/* </div> */}
      {/* <div className="flex flex-col items-center justify-start gap-[1.1rem]"> */}
      {/* <div className="flex flex-row items-end justify-start"> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-royalblue-100 h-[7.575rem] overflow-hidden shrink-0" /> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-aliceblue-200 h-[3.581rem] overflow-hidden shrink-0" /> */}
      {/* </div> */}
      {/* <div className="relative leading-[0.964rem]">Wed</div> */}
      {/* </div> */}
      {/* <div className="flex flex-col items-center justify-start gap-[1.1rem]"> */}
      {/* <div className="flex flex-row items-end justify-start"> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-lightgreen h-[7.575rem] overflow-hidden shrink-0" /> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-aliceblue-200 h-[2.481rem] overflow-hidden shrink-0" /> */}
      {/* </div> */}
      {/* <div className="relative leading-[0.964rem]">Thu</div> */}
      {/* </div> */}
      {/* <div className="flex flex-col items-center justify-start gap-[1.1rem]"> */}
      {/* <div className="flex flex-row items-end justify-start"> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-royalblue-100 h-[6.063rem] overflow-hidden shrink-0" /> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-aliceblue-200 h-[1.794rem] overflow-hidden shrink-0" /> */}
      {/* </div> */}
      {/* <div className="relative leading-[0.964rem]">Fri</div> */}
      {/* </div> */}
      {/* <div className="flex flex-col items-center justify-start gap-[1.1rem]"> */}
      {/* <div className="flex flex-row items-end justify-start"> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-firebrick h-[7.575rem] overflow-hidden shrink-0" /> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-aliceblue-200 h-[2.481rem] overflow-hidden shrink-0" /> */}
      {/* </div> */}
      {/* <div className="relative leading-[0.964rem]">Sat</div> */}
      {/* </div> */}
      {/* <div className="flex flex-col items-center justify-start gap-[1.1rem]"> */}
      {/* <div className="flex flex-row items-end justify-start"> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-firebrick h-[7.575rem] overflow-hidden shrink-0" /> */}
      {/* <div className="w-[1.794rem] relative rounded-t-[26.45px] rounded-b-none bg-aliceblue-200 h-[2.481rem] overflow-hidden shrink-0" /> */}
      {/* </div> */}
      {/* <div className="relative leading-[0.964rem]">Sun</div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default DataAnalysis;
