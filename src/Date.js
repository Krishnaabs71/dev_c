import React, { useState } from "react";
import { parseISO, addMinutes, format } from "date-fns";
import "./Date.css";

const Date = () => {
  const [fromDate, setFromDate] = useState("");
  const [duration, setDuration] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);

    if (fromDate && event.target.value) {
      const parsedFromDate = parseISO(fromDate);
      const toDate = addMinutes(
        parsedFromDate,
        parseInt(event.target.value, 10)
      );
      setToDate(format(toDate, "yyyy-MM-dd'T'HH:mm"));
    } else {
      setToDate("");
    }
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  return (
    <div className="data-time-section">
        <h1>Date and Time Duration</h1>
        <div className="content-section">
            <div className="my-3">
                <label htmlFor="fromDate">From Date:</label>
                <input
                type="datetime-local"
                id="fromDate"
                value={fromDate}
                onChange={handleFromDateChange}
                />
            </div>
            <div className="my-3">
                <label htmlFor="duration">Duration (in minutes):</label>
                <input
                type="number"
                id="duration"
                value={duration}
                onChange={handleDurationChange}
                />
            </div>
            <div className="my-3">
                <label htmlFor="toDate">To Date:</label>
                <input
                type="datetime-local"
                id="toDate"
                value={toDate}
                onChange={handleToDateChange}
                readOnly
                />
            </div>
        </div>
        
    </div>
  );
};

export default Date;
