import { addDays, format, isSameMonth, isWeekend, startOfWeek } from 'date-fns';
import "./DaysNames.css"
import React from 'react'

const DaysNames = ({
    data,
    currentMonth,
    currentDay,
    currentWeek,
    view,
    hourIntervals,
    typeDay,
}) => {

    const extra = data.extra;
    const Unlogged = data.Unlogged;
    const logged = data.logged;

    let startDate 
    let monthStart 
    let formattedDate 
    let day 
    let dayFormat = "d";
    let dateFormat = "eee";

    const days = [];

    if (view === "month") {

        startDate = startOfWeek(currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="month colCalendar colCalendar-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            )
        }
    }

    if (view === "week") {

        startDate = startOfWeek(currentWeek);
        day = startDate

        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dayFormat);
            days.push(
                <div className={`week colCalendar cellDay `}
                    key={i}>
                    <div className={`badge  
                       ${(typeDay(extra, "date", formattedDate) && isSameMonth(day, monthStart)) && "extraHoursWeekly"}
                       ${(typeDay(Unlogged, "date", formattedDate) && isSameMonth(day, monthStart)) && "unloggedHoursWeekly"}
                       ${(typeDay(logged, "date", formattedDate) && isSameMonth(day, monthStart)) && "loggedHoursWeekly"}
                       ${!isSameMonth(day, currentWeek) && "disabledWeekly"} ${isWeekend(day) && "isWeekendWeekly"} `} >

                        {format(addDays(startDate, i), dateFormat)}  -  {formattedDate}
                    </div>

                    {
                        // eslint-disable-next-line no-loop-func
                        hourIntervals.map((hr, idx) =>
                            <div key={idx} className={`colCalendar cell`} >
                                {/* handling Data  */}

                            </div>)
                    }
                </div>
            )
            day = addDays(day, 1);
        }
    }

    if (view === "day") {
        startDate = startOfWeek(currentDay);
        day = currentDay

        for (let i = 0; i < 1; i++) {
            formattedDate = format(day, dayFormat);
            days.push(
                <div className={`day colCalendar cellDay `} key={i}>
                    <div className={`badge  
                              ${(typeDay(extra, "date", formattedDate) && isSameMonth(day, currentDay)) && "extraHoursWeekly"}
                              ${(typeDay(Unlogged, "date", formattedDate) && isSameMonth(day, currentDay)) && "unloggedHoursWeekly"}
                              ${(typeDay(logged, "date", formattedDate) && isSameMonth(day, currentDay)) && "loggedHoursWeekly"}
                              ${!isSameMonth(day, currentDay) && "disabledWeekly"} ${isWeekend(day) && "isWeekendWeekly"} `} >

                        {format(addDays(currentDay, i), dateFormat)}  -  {formattedDate}
                        
                    </div>

                    {
                        // eslint-disable-next-line no-loop-func
                        hourIntervals.map((hr, idx) =>
                            <div key={idx} className={`colCalendar cell`} >
                                {/* handling Data  */}
                            </div>)
                    }
                </div>
            )
            day = addDays(day, 1);
        }
    }

    return (
        <div className="days rowCalendar">{days}</div>
    )
}

export default DaysNames
