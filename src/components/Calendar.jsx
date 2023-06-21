import dateFns from 'date-fns';
import './Calendar.css';
import { useState } from 'react';

const Calendar = () => {

    const [currentMonth , setCurrentMonth] = useState(new Date);
    const [selectedDate ,setSelectedDate] = useState(new Date);

    const renderHeader = () =>{}

    return <div>
        <div>header</div>
        <div>days</div>
        <div>cell</div>
    </div>

}
export default Calendar;