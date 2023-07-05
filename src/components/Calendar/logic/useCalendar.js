import { useEffect, useState, useReducer } from "react";
import { addMonths, subMonths, nextMonday, previousMonday, addDays, subDays} from 'date-fns';
import { generateHourIntervals, typeDay} from "./utlis/helpersCalendar";

//import useAuth from "../../../core/hooks/useAuth";
import data from './Data';

let currentDate = new Date();
const calendarState = {
    view: "month",
    currentDay: currentDate,
    currentWeek: currentDate,
    currentMonth: currentDate,    
}

const configObject = {
    prev: {
        month: { adjustDate: subMonths, dateState: "currentMonth" },
        week: { adjustDate: previousMonday, dateState: "currentWeek" },
        day: { adjustDate: subDays, dateState: "currentDay" }
    },
    next: {
        month: { adjustDate: addMonths, dateState: "currentMonth" },
        week: { adjustDate: nextMonday, dateState: "currentWeek" },
        day: { adjustDate: addDays, dateState: "currentDay" }
    }
}

const calendarReducer = (state, action) => {
    
    let adjustDate;
    let viewObject;

    switch (action.type) {
        case "prev":
            viewObject = configObject.prev[state.view];
            adjustDate = viewObject.adjustDate;
            return { ...state, [viewObject.dateState]: adjustDate(state[viewObject.dateState], 1) }
        case "next":
            viewObject = configObject.next[state.view];
            adjustDate = viewObject.adjustDate
            return { ...state, [viewObject.dateState]: adjustDate(state[viewObject.dateState], 1) }
        case "reset":
            return { ...state, currentDay: currentDate, currentWeek: currentDate, currentMonth: currentDate }
        case "view":
            return { ...state, view: action.payload }
        default: 
            return calendarState
    }
}

const useCalendar = () => {

    const [CalendarState, dispatch] = useReducer(calendarReducer, calendarState);
   // const { authenticatedUser } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleTodayClick = () => {
        dispatch({ type: "reset" })
    }

    const next = () => {
        dispatch({ type: "next" })
    }
    const prev = () => {
        dispatch({ type: "prev" })
    }

    const handleViewChange = (newView) => {
        dispatch({ type: "view", payload: newView })
    }

    const hourIntervals = generateHourIntervals()

  /*  useEffect(() => {
    }, [isLoading, error, authenticatedUser])*/

    return {
        data,
        isLoading,
        setIsLoading,
        handleViewChange,
        currentWeek: CalendarState.currentWeek,
        currentMonth: CalendarState.currentMonth,
        currentDay: CalendarState.currentDay,
        view: CalendarState.view,
        error,
        setError,
        handleTodayClick,
       // authenticatedUser,
        next,
        prev,
        generateHourIntervals,
        hourIntervals,
        typeDay   
    }
}

export default useCalendar;