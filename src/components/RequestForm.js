import React from 'react';

const RequestForm = ({ handleSubmit, handleChange, date, time }) => {
  return (
    <>
      <p className="bg-black text-white p-2 mt-2">Pick up time and date to your car get ready</p>
      <form onSubmit={handleSubmit} className="border-gray-900 border my-2 p-10">
        <input name="date" type="date" value={date} onChange={handleChange} />
        <input name="time" type="time" value={time} onChange={handleChange} />
        <button>Order car</button>
      </form>
    </>
  );
};

export default RequestForm;
