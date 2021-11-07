import './App.css';
import { useState } from 'react';
import useLocalState from './hooks/localStorage'

import Garage from './components/Garage';
import RequestForm from './components/RequestForm';
import ParkingCarForm from './components/ParkingCarForm'
import ClearPlaceForm from './components/ClearPlaceForm';

function App() {
  const [date, setDate] = useLocalState('date', '');
  const [time, setTime] = useLocalState('time', '');
  const [car, setCar] = useLocalState('car', 'CHIC000');
  const [parkingNumber, setParkingNumber] = useLocalState('parkingNumber', 0);
  const [placeToClear, setPlaceToClear] = useState(0);
  const [user, setUser] = useState({
    fname: 'Stacey',
    lname: 'Gonzalez',
    email: 'stacey.gonzalez@gmail.com',
    plates: '',
    car: 'Honda Civic',
  });


  const parkingPlaces = Array.from({ length: 100 });
  const emptyParking = parkingPlaces.map((element, index) => ({id: index, plates: null, pickUpAt: null}))
  const [parkedCars, setParkedCars] = useLocalState('parkedCars', emptyParking);

  const handleSubmit = e => {
    e.preventDefault();
    const orderConfirmed = window.confirm(`Hi ${user.fname} Are you sure to order your ${user.car} ${date} at ${time}`)
    if(orderConfirmed) {
      const newParkingState = [...parkedCars]
      const index = parkedCars.findIndex(element => (element.plates === user.plates))
      newParkingState[index] = {id: parkingNumber, plates: user.plates, pickUpAt: time};
      setParkedCars(newParkingState);
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
    } else if (e.target.name === 'plates') {
      const newUserState = {...user};
      newUserState.plates = e.target.value.toUpperCase();
      setUser(newUserState);
    }
  };

  const handleParking = e => {
    e.preventDefault();
    
    const parkingConfirmed = window.confirm(`Are you sure to park you car ${car} at place number ${parkingNumber}`)
    if(parkingConfirmed) {
      const newParkingState = [...parkedCars]
      const alredyExists = parkedCars.find((element) => element.plates === car)
      if(!alredyExists) {
        newParkingState[parkingNumber] = {id: parseInt(parkingNumber), plates: car, pickUpAt: null};
        setParkedCars(newParkingState);
      } else {
        alert(`Car ${car} is already parked.`)
      }
    }
}
  const handleParkingChange = e => {
    if(e.target.name === 'parkingnumber') {
      setParkingNumber(e.target.value.toUpperCase())
    } else if (e.target.name === 'car') {
      setCar(e.target.value.toUpperCase())
    }
  }

  const handleCleanSubmit = e => {
    e.preventDefault();
    const newParkingState = [...parkedCars]
      newParkingState[placeToClear] = {id: placeToClear, plates: null, pickUpAt: null};
      setParkedCars(newParkingState);

  }

  const handleCleanChange = e => {
    setPlaceToClear(e.target.value)
  }

  return (
    <div className="App container mx-auto">
      <RequestForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        time={time}
        date={date}
        user={user}
      />
      <ClearPlaceForm handleSubmit={handleCleanSubmit} handleChange={handleCleanChange} placeToClear={placeToClear}/>
      <ParkingCarForm handleSubmit={handleParking} handleChange={handleParkingChange} car={car} parkingNumber={parkingNumber}/>
      <h2 className="bg-black text-white p-2 mt-2 font-bold mb-2">Garage P1</h2>
      <Garage parkedCars={parkedCars}/>
      <h2 className="bg-black text-white p-2 mt-2 font-bold mb-2">Garage P2</h2>
      <Garage parkedCars={parkedCars}/>
    </div>
  );
}

export default App;
