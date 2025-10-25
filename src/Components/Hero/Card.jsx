import React from 'react';

const Card = ({backgroundColor}) => {
  return (
    <div className="w-[100%]">
      <div
        className={`card ${backgroundColor}  h-[200px] flex flex-col items-center justify-center space-y-4 `}
      >
        <h3 className='text-[20px]' >In Progress</h3>
        <span className='text-[32px] bold' >0000</span>
      </div>
    </div>
  );
};

export default Card;