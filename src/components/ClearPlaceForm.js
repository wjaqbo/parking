import React from 'react'

export const ClearPlaceForm = ({handleSubmit, placeToClear, handleChange}) => {
    return (
        <div className="bg-white shadow-lg sticky top-10 border-t">
            <form className="border-gray-900 mb-2 p-10 flex justify-between items-center" onSubmit={handleSubmit}>
                <label>Parking number</label>
                <input type="number" value={placeToClear} onChange={handleChange} min="0"/>
                <button className="bg-red-600 px-10 h-16 text-white text-2xl w-64">Clear place</button>
            </form>
        </div>
    )
}

export default ClearPlaceForm;
