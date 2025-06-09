import React from "react";
import { MoveUp } from "lucide-react";

// document.body.append('<i data-lucide="move-up"></i>');
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Created", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end ">
                {index === 1 && (
                  <div className="mr-[0.5vw] w-[8vw] rounded-md h-[5.7vw] top-[1.1vw] relative bg-green-500"></div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-['Test Founders Grotesk X-Cond Bold'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      {/* first part of landing-page has completed  */}

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index}  className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        {/* second-part of landing page has completed  */}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <MoveUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

