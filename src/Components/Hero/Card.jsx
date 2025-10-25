import React from "react";
import vector1 from "../../asset/vector1.png";


const Card = ({ backgroundColor = "bg-blue-200" }) => {
  return (
    <div className={`w-full ${backgroundColor} relative rounded-xl h-[200px] flex items-center justify-center overflow-hidden`}>
      
      <img
        src={vector1}
        alt="vector1"
        className="leftImg absolute left-0 top-1/2 -translate-y-1/2 w-[50%] h-[100%] object-contain"
      />

      <img
        src={vector1}
        alt="vector2"
        className="rightImg absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[100%] object-contain"
        style={{ transform: "scaleX(-1)" }}
      />

      <div className="content relative text-center">
        <h3 className="text-[20px] font-bold">In Progress</h3>
        <span className="text-[32px] font-bold">0000</span>
      </div>
    </div>
  );
};

export default Card;
