import React from 'react'
import './MonthViewCells.css'
import { addDays, endOfMonth, endOfWeek, format, isSameMonth, isWeekend, startOfMonth, startOfWeek } from 'date-fns';

const CellsCalendar = ({
    view,
    data,
    currentMonth,
    typeDay,
}) => {

    const extra = data.extra;
    const Unlogged = data.Unlogged;
    const logged = data.logged;

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let formattedDate = "";
    let startDate = startOfWeek(monthStart);
    let day = startDate;

    if (view === "month") {
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                days.push(
                    <div className={`month colCalendar cell
                     ${!isSameMonth(day, monthStart)  && "disabled" } 
                     ${isWeekend(day) && "isWeekend"} `}
                        key={day}>
                            
                        <div className={`"badge
                    ${(typeDay(extra, "date", formattedDate) && isSameMonth(day, monthStart)) && "extraHours"}
                    ${(typeDay(Unlogged, "date", formattedDate) && isSameMonth(day, monthStart)) && "unloggedHours"}
                    ${(typeDay(logged, "date", formattedDate) && isSameMonth(day, monthStart)) && "loggedHours"}`}>
                        </div>
                         
                        <span className="number">{formattedDate} </span>

                        <div className="informationCell">
                            {(
                                (typeDay(extra, "date", formattedDate) && isSameMonth(day, monthStart)) ||
                                (typeDay(Unlogged, "date", formattedDate) && isSameMonth(day, monthStart)) ||
                                (typeDay(logged, "date", formattedDate) && isSameMonth(day, monthStart))
                            ) && <>
                                    <label> </label>
                                    <label> title :"sickness" </label>
                                    <label> date deb : </label>
                                </>}
                        </div>
                    </div>
                )
                day = addDays(day, 1);
            }
            rows.push(
                <div className="body" key={day}>
                    {days}
                </div>
            )
            days = [];
        }
    }

    return <div className="body"> {rows}</div>
}

export default CellsCalendar
