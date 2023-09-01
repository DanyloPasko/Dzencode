import React from 'react';
import '../Top_menu/Top_menu.css';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Topmenu() {

  const currentDate = new Date();
  const currentTime = new Date().toLocaleTimeString("uk-UA", { timeZone: "Europe/Kiev", timeStyle: "short" });

  const [currentKievTime, setCurrentKievTime] = useState(currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = new Date().toLocaleTimeString("uk-UA", { timeZone: "Europe/Kiev", timeStyle: "short" });
      setCurrentKievTime(updatedTime);
    }, 60000);
    return () => clearInterval(interval);
  }, [currentDate]);

  const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  const options = { day: "numeric", month: "short", year: "numeric", };
  const formattedDate = currentDate.toLocaleDateString("uk-UA", options);



  return (
    <header className="Header bg-light shadow d-flex align-items-center ">
      <section className="Header__logo d-flex align-items-center py-3">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
          </svg>
        </Link>
        <div>
          Inventory
        </div>
      </section>
      <input type="text" className="Header__search " placeholder="Пошук" />
      <section className="Header__date_and_time  ">
        <section className="Year">
          <div>{currentDayOfWeek}</div>
        </section>

        <div className='d-flex'>
        <div>{formattedDate}</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" fill="green" class="bi bi-clock Clock-icon " viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
        </svg>{currentKievTime} </div>
      </section>
    </header>
  )
};