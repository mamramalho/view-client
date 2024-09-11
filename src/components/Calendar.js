import React, { useState, useEffect } from 'react';
import './Calendar.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const today = new Date(); 
    const daysArray = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === day;

      daysArray.push({ day, isToday }); 
    }

    setDaysInMonth(daysArray);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(new Date(prevMonth));
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(new Date(nextMonth));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <div className="calendar-title">
          <h1>{monthNames[currentDate.getMonth()]}</h1>
          <h2>{currentDate.getFullYear()}</h2>
        </div>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>

      <div className="calendar-body">
        <div className="calendar-days">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="calendar-day-name">{day}</div>
          ))}
        </div>

        <div className="calendar-dates">
          {daysInMonth.map((dayInfo, index) => (
            <div
              key={index}
              className={`calendar-day ${dayInfo ? (dayInfo.isToday ? 'today' : '') : 'empty'}`}
            >
              {dayInfo?.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
