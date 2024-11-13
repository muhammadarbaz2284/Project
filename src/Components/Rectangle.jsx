import React, { useState } from 'react';

function Rectangle() {
  const [region, setRegion] = useState('Al Shamal');
  const [date, setDate] = useState('15 Jan - 20 Jan 2022');
  const [persons, setPersons] = useState(5);

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handlePersonsChange = (event) => {
    setPersons(event.target.value);
  };

  return (
    <div className="filters">
      <div className="filter">
        <label htmlFor="region">Select region:</label>
        <select id="region" value={region} onChange={handleRegionChange}>
          <option value="Al Shamal">Al Shamal</option>
          {/* Add more region options here */}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="date">Select date:</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div className="filter">
        <label htmlFor="persons">Select persons:</label>
        <input
          type="number"
          id="persons"
          value={persons}
          onChange={handlePersonsChange}
        />
      </div>
    </div>
  );
}

export default Rectangle;
