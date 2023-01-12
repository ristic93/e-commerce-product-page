import React from "react";

export const Button = ({children, onClick}) => {
  return (
    <div>
      <button className="flex items-center justify-center gap-4 bg-orange py-2 px-4 text-white font-[700] rounded-lg mt-5 w-full lg:mt-0 hover:opacity-80 ease-in-out duration-300" onClick={() => onClick()}>
        {children}
      </button>
    </div>
  );
};

