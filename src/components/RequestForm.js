import React from 'react';

const RequestForm = ({ handleSubmit, handleChange, date, time, user }) => {
  return (
    <div className="sticky top-0 bg-white shadow-lg bg-opacity-60">
      <p className="bg-black text-white p-2 mt-2 font-bold">Pick up time and date to your car get ready</p>
      <form onSubmit={handleSubmit} className="border-gray-900 mb-2 p-10 flex justify-between items-center">
        <input name="date" type="date" value={date} onChange={handleChange} />
        <input name="time" type="time" value={time} onChange={handleChange} />
        <label className="mx-2">Plates</label>
        <input name="plates" type="text" value={user.plates} onChange={handleChange} className="uppercase"/>
        <button className="bg-blue-600 h-16 px-10 border-r-2 text-white text-2xl w-64">Order car</button>
      </form>
    </div>
  );
};

export default RequestForm;
