import { eachHourOfInterval, endOfDay, startOfDay, startOfWeek } from "date-fns";

export const generateHourIntervals = () => {
    const startHour = startOfDay(new Date());
    const endHour = endOfDay(new Date());
    const hourIntervals = eachHourOfInterval({
        start: startHour,
        end: endHour,
    });
    return hourIntervals
}

export const typeDay = (array, searchKey, searchValue,) => {
    let result = array.filter((el, idx) => el[`${searchKey}`] === searchValue)
    return result.length > 0
}

export const handlingData = (array, searchKey) => {
    return array.map((el, idx) => el[`${searchKey}`])
}

export const getStartDate=(view,startDate,dateDetails)=>{

    switch (view) {
        case "month": return startDate = startOfWeek(dateDetails["monthStart"]);
        case "week": return  startDate = startOfWeek(dateDetails["currentWeek"]);
        case "day": return startDate = startOfWeek(dateDetails["currentDay"]);
        // eslint-disable-next-line no-fallthrough
        default: return startDate = startOfWeek(dateDetails["currentMonth"]);
    }
}

