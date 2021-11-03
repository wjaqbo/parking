import './App.css';
import { useState } from 'react';

import Garage from './components/Garage';
import RequestForm from './components/RequestForm';
import ParkingCarForm from './components/ParkingCarForm'

function App() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [car, setCar] = useState('ZS7855');
  const [parkingNumber, setParkingNumber] = useState(0);
  const [user, setUser] = useState({
    fname: 'Stacey',
    lname: 'Gonzalez',
    plates: 'ZS56477',
    car: 'Honda Civic',
  });


  const parkingPlaces = Array.from({ length: 100 });
  const emptyParking = parkingPlaces.map((element, index) => ({id: index, plates: null}))
  const [parkedCars, setParkedCars] = useState(emptyParking);

  const handleSubmit = e => {
    e.preventDefault();
    const orderConfirmed = window.confirm(`Are you sure to order you car ${date} at ${time}`)
    if(orderConfirmed) {
    console.log('user', user);
    console.log('date', date);
    console.log('time', time);
    }
  };

  const handleChange = e => {
    if (e.target.name === 'time') {
      setTime(e.target.value);
    } else if (e.target.name === 'date') {
      setDate(e.target.value);
    }
  };

  const handleParking = e => {
    e.preventDefault();
    const parkingConfirmed = window.confirm(`Are you sure to park you car ${car} at place number ${parkingNumber}`)
    if(parkingConfirmed) {
      const newParkingState = [...parkedCars]
      newParkingState[parkingNumber] = {id: parkingNumber, plates: car};
      setParkedCars(newParkingState);
    }
}
  const handleParkingChange = e => {
    if(e.target.name === 'parkingnumber') {
      setParkingNumber(e.target.value)
    } else if (e.target.name === 'car') {
      setCar(e.target.value)
    }
  }

  return (
    <div className="App container mx-auto">
      <RequestForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        time={time}
        date={date}
      />
      <ParkingCarForm handleSubmit={handleParking} handleChange={handleParkingChange} car={car} parkingNumber={parkingNumber}/>
      <h2 className="bg-black text-white p-2 mt-2 font-bold mb-2">Garage P1</h2>
      <Garage parkedCars={parkedCars}/>
      <h2 className="bg-black text-white p-2 mt-2 font-bold mb-2">Garage P2</h2>
      <Garage parkedCars={parkedCars}/>
    </div>
  );
}

export default App;
