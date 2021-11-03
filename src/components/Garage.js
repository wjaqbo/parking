import React from 'react';


const Garage = ({parkedCars}) => {
  return (
    <div className="garage flex justify-between align-middle">
      {parkedCars.map((element, index) => (
        <div className="parking-place bg-gray-200 cursor-pointer p-2" key={index}>
          <p className="font-bold text-xs">Parking no {index}</p>
          <p>car: {element.plates}</p>
        </div>
      ))}
    </div>
  );
};

export default Garage;
