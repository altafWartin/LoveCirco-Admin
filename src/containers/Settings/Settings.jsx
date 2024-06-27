import React from "react";
import {Link} from "react-router-dom"
import MultiCardCarousel from "./MultiCardCarousel";

const Settings = () => {
  return (
    <section class=" ml-[19rem] w-full rounded-xl   items-start justify-center py-[2.375rem] px-[2.125rem] box-border gap-[0rem_1.375rem] min-h-[55.188rem] max-w-[calc(100%_-_300px)] text-left text-[2.375rem] text-white font-gilroy mq925:flex-wrap mq925:pt-[1.563rem] mq925:pb-[1.563rem] mq925:box-border mq925:max-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
      {" "}
      <div className="absolute top-[9.375rem] left-[28.75rem] flex flex-col items-end justify-start gap-[1.562rem] text-center text-[0.881rem] font-mulish">
        <div>
          {" "}
          <div className="flex flex-col items-center justify-start gap-[1.875rem]">
            <div className="w-[14.5rem] relative h-[3.375rem]">
              <div className="absolute top-[0rem] left-[0rem] shadow-[0px_9.4px_31.28px_rgba(197,_191,_213,_0.24)] rounded-[39.1px] bg-crimson-200 overflow-hidden flex flex-col items-start justify-start py-[0.312rem] px-[0.437rem] text-left">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start">
                    <div className="shadow-[0px_3px_5.04px_rgba(0,_0,_0,_0.15)] rounded-[67.18px] bg-grays-white overflow-hidden flex flex-row items-center justify-center py-[0.812rem] px-[1.875rem]">
                      <div className="relative text-black font-semibold">
                        Subscribtion plans
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[2.812rem] text-[1.269rem] text-gray-400">
              <MultiCardCarousel />
            </div>
          </div>
        </div>
       
      </div>
      <Link to="/settings/createNewPlan" className="w-[24.375rem] text-white left-[500px] top-[250px] relative h-[3.438rem] text-[1.306rem] font-regular">
          <div className="w-[22.375rem] absolute top-[0rem] left-[0rem] rounded-[12.56px] bg-crimson-200 overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[3.625rem]">
            <div className="relative font-medium">Add New Subscription Plan</div>
          </div>
        </Link>
    </section>
  );
};

export default Settings;
