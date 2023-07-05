import React from 'react';
import useCalendar from './logic/useCalendar';
import { Spinner } from 'react-bootstrap';
import { Alert  } from 'bootstrap';

import AppCalendar from '../../components/AppCalendar/AppCalendar';
import  "./Calendar.css";

const Calendar = () => {
    const {
        data ,
        isLoading,
        handleViewChange,
        view,
        currentDay,
        currentWeek,
        currentMonth,
        error,
        handleTodayClick,
        prev,
        next,
        generateHourIntervals,
        hourIntervals,
        typeDay
      } =useCalendar();


  if (isLoading) return <Spinner variant="primary"/>
  if(error) return <Alert variant="danger">{error}</Alert>
      
  return (
        <div className="calendarContainer">
            <AppCalendar data={data}  isLoading={isLoading}
            handleViewChange={handleViewChange} view={view}
            currentDay={currentDay} 
            currentWeek={currentWeek} 
            currentMonth={currentMonth}
            handleTodayClick={handleTodayClick} 
            prev={prev} next={next}
            generateHourIntervals={generateHourIntervals}
            hourIntervals={hourIntervals}
            typeDay={typeDay}
            />
        </div>
    )

}
export default Calendar


//PageLayout pageName="Calendar" pageClass="calendarPage" hasHeight={true} > </PageLayout>
