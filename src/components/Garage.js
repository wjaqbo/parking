import React from 'react';


const Garage = ({parkedCars}) => {
  return (
    <div className="garage flex items-center">
      {parkedCars && parkedCars.map((element, index) => {
        const isFree = (element.plates === null);
        const isOrdered = (element.pickUpAt !== null);
        return (<div className={`parking-place bg-gray-200 flex flex-col justify-between p-2 ${isFree ? "free" : "" } ${isOrdered ? "ordered bg-red-600" : "" }`} key={index}>
          <p className="font-bold text-xs">Parking no {index}</p>
          <p className="uppercase font-bold text-2xl mb-auto">{element.plates}</p>
          {(element.pickUpAt) && <p>Pick up at: </p>}
          {(element.pickUpAt) && <p className="font-bold text-3xl">{element.pickUpAt}</p>}
        </div>)
      })}
    </div>
  );
};

export default Garage;
