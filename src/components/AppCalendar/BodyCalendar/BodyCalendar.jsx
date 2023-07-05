import React from 'react';
import './BodyCalendar.css';
import MonthViewCells from './MonthViewCells/MonthViewCells';
import DaysNames from './DaysNames/DaysNames';
import HoursDetails from './HoursDetails/HoursDetails'

const BodyCalendar = ({
  hourIntervals,
  view,
  data,
  currentDay,
  currentWeek,
  currentMonth,
  typeDay,
  handlingData
}) => {
 
  return (
    <div className="calendar">
      <div className="mainContainer">
        <div className="appMainCalendar">
          <div className={`${view !=="month" && "weekDayView"}`}>    

            <DaysNames
            data={data}
            currentDay={currentDay}
            currentWeek={currentWeek}
            currentMonth={currentMonth}
            view={view}
            typeDay={typeDay}
            handlingData={handlingData}
            hourIntervals={hourIntervals}
          />

            <MonthViewCells
              view={view}
              currentDay={currentDay}
              currentWeek={currentWeek}
              currentMonth={currentMonth}
              data={data}
              typeDay={typeDay}
              handlingData={handlingData} 
               />
            </div>
          <div className="hoursDetails">
                 { view !=="month" && <HoursDetails hourIntervals={hourIntervals}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyCalendar
