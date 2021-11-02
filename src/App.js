import './App.css';
import { useEffect, useState } from 'react';

import Garage from './components/Garage';
import RequestForm from './components/RequestForm';

function App() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [user, setUser] = useState({
    fname: 'Stacey',
    lname: 'Gonzalez',
    plates: 'ZS56477',
    car: 'Honda Civic',
  });
  const [parkedCars, setParkedCars] = useState([
    { plate: 'ZS56477', parkingNumber: '50' },
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('user', user);
    console.log('date', date);
    console.log('time', time);
  };

  const handleChange = e => {
    if (e.target.name === 'time') {
      setTime(e.target.value);
    } else if (e.target.name === 'date') {
      setDate(e.target.value);
    }

    console.log('changed input value', e.target.value);
  };

  return (
    <div className="App">
      <RequestForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        time={time}
        date={date}
      />
      <h2>Garage P1</h2>
      <Garage />
      <h2>Garage P2</h2>
      <Garage />
    </div>
  );
}

export default App;
