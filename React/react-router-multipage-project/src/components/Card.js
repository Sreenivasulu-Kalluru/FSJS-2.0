import React from 'react';

const Cards = ({ name, imgSrc, description }) => {
  return (
    <div className="card w-96 bg-gray shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={imgSrc}
          alt="Potrait of the Person"
          className="rounded-xl w-[300px] h-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-[30px] font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
