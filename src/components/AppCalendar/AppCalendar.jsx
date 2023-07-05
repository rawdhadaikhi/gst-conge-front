import React from 'react'
import HeaderCalendar from './HeaderCalendar/HeaderCalendar';
import BodyCalendar from './BodyCalendar/BodyCalendar';

const AppCalendar = ({
  data,
  currentDay,
  currentWeek,
  currentMonth,
  typeDay,
  handleViewChange,
  view,
  next,
  prev,
  handleTodayClick,
  hourIntervals,
  }) => {

  return (
    <>
    <HeaderCalendar
      currentDay={currentDay}
      currentWeek={currentWeek} 
      currentMonth={currentMonth}
      handleViewChange={handleViewChange}
      view={view}
      next={next}
      prev={prev}
      handleTodayClick={handleTodayClick}/>

    <BodyCalendar 
    hourIntervals={hourIntervals} 
    view={view}
    data={data}
    currentDay={currentDay}
    currentWeek={currentWeek}
    currentMonth={currentMonth}
    typeDay={typeDay} />    
    </>

  )
}

export default AppCalendar
