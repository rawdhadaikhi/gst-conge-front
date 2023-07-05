import { format } from 'date-fns';
import "./HeaderCalendar.css"
import { IconChevronRightCalendar, IconChevronLeftCalendar, IconToday } from "../../icons";

const HeaderCalendar = ({
    currentMonth,
    currentDay,
    handleViewChange,
    view,
    currentWeek,
    prev,
    next,
    handleTodayClick,
}) => {

    const dateFormat = "MMM yyyy";
    return (
        <div className="header rowCalendar flex-middle">
            <div className="leftHeaderCalendar">
                <div className="todayBtn" onClick={handleTodayClick}>
                    <IconToday />
                    <span> Today</span>
                </div>
            </div>

            <div className="centerHeaderCalendar">
                <div className="icon" onClick={prev}>
                    <IconChevronLeftCalendar />
                </div>
                <div>
                    <span> {view === "month" && format(currentMonth, dateFormat)}</span>
                    <span> {view === "week" && format(currentWeek, dateFormat)}</span>
                    <span> {view === "day" && format(currentDay, dateFormat)}</span>
                </div>
                <div className="icon" onClick={next}>
                    <IconChevronRightCalendar />
                </div>
            </div>

            <div className="rightHeaderCalendar">
                <div onClick={() => handleViewChange('month')} >
                    <span>Month</span>
                </div>
                <div onClick={() => handleViewChange('week')} >
                    <span >Week</span>
                </div>
                <div onClick={() => handleViewChange('day')}>
                    <span>Day</span>
                </div>
            </div>

            <div className="rightheaderResponsive">
                <select className="selectView" onChange={(e) => handleViewChange(e.target.value)} >
                    <option value='month'>Month</option>
                    <option value='week'>Week</option>
                    <option value='day'>Day</option>
                </select>
            </div>
        </div>
    )
}

export default HeaderCalendar
