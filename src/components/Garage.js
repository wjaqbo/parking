import React from 'react';


const Garage = ({parkedCars}) => {
  return (
    <div className="garage flex items-center">
      {parkedCars.map((element, index) => {
        const isFree = (element.plates === null);
        return (<div className={`parking-place bg-gray-200 cursor-pointer p-2 ${isFree ? "free" : "" }`} key={index}>
          <p className="font-bold text-xs">Parking no {index}</p>
          <p className="uppercase font-bold text-2xl">{element.plates}</p>
          <p>Pick up at: {element.pickUpAt}</p>
        </div>)
      })}
    </div>
  );
};

export default Garage;
