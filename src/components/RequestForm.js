import React from 'react';

const RequestForm = ({ handleSubmit, handleChange, date, time }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Pick up time and date to your car get ready</p>
        <input name="date" type="date" value={date} onChange={handleChange} />
        <input name="time" type="time" value={time} onChange={handleChange} />
        <button>Order car</button>
      </form>
    </>
  );
};

export default RequestForm;
