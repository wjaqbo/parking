import React from 'react';

const Garage = () => {
  const parkingPlaces = [];
  return (
    <div className="garage">
      {Array.from({ length: 100 }).map((element, index) => (
        <div className="parking-place" key={index}>
          {index}
        </div>
      ))}
    </div>
  );
};

export default Garage;
