import {format } from 'date-fns';
import "./HoursDetails.css"
const HoursDetails = ({hourIntervals}) => {
  const hourFormat = 'HH';
 return ( <div className="intervalHour">
  {
    hourIntervals.map((hr, idx)=><div key={idx} className="cellHour">
       {format(hr,hourFormat)}h
     </div>)
  }  </div>
  )
}

export default HoursDetails
