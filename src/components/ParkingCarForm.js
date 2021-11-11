import React from 'react'

export const ParkingCarForm = ({handleSubmit, handleChange, car, parkingNumber}) => {
    return (
        <div className="bg-white shadow-lg sticky top-10 border-t">
            <form onSubmit={handleSubmit} className="border-gray-900 mb-2 p-10 flex justify-between items-center">
                <label>Parking number</label>
                <input name="parkingnumber" type="number" value={parkingNumber} onChange={handleChange} min="0"/>
                <label>Plates</label>
                <input name="car" type="text" value={car} onChange={handleChange} className="uppercase"/>
                <button className="bg-blue-600 px-10 h-16 border border-r-2 text-white text-2xl w-64">Park car</button>
            </form>
        </div>
    )
}

export default ParkingCarForm;
