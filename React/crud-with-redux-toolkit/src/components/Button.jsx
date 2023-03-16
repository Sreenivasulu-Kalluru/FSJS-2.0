import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-[brown] text-white font-[600] py-2 px-6 my-10 rounded hover:bg-[#942424]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
