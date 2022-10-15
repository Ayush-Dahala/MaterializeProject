import React from 'react'
import {Calendar,dateFnsLocalizer} from "react-big-calendar"
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import "react-big-calendar/lib/css/react-big-calendar.css"
import AddEvent from './AddEvent'

const locales={
    "en-US":require("date-fns/locale/en-US")
}

const localizer=dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events=[{
    title:'6:48p Design Review',
    allDay:true,
    start:new Date(2022,9,11),
    end:new Date(2022,9,13)

},
{
    title:'Dart Game',
    allDay:true,
    start:new Date(2022,9,18),
    end:new Date(2022,9,18)
    
},
{
  title:'Dinner',
  allDay:true,
  start:new Date(2022,9,18),
  end:new Date(2022,9,18)
  
},
{
  title:"Doctor's appointment",
  allDay:true,
  start:new Date(2022,9,20),
  end:new Date(2022,9,20)
  
  },
  {
    title:"Meeting With Clients",
    allDay:true,
    start:new Date(2022,9,20),
    end:new Date(2022,9,20)
    
    },
    {
      title:"Meeting With Clients",
      allDay:true,
      start:new Date(2022,9,20),
      end:new Date(2022,9,20)
      
      },
    {
      title:"Meeting With Clients",
      allDay:true,
      start:new Date(2022,9,20),
      end:new Date(2022,9,20)
        
    },
    {
      title:"Family Trip",
      allDay:true,
      start:new Date(2022,9,22),
      end:new Date(2022,9,22)
      
      },
      {
        title:"Family Trip",
        allDay:true,
        start:new Date(2022,9,23),
        end:new Date(2022,9,23)
        
        },
        {
          title:"Monthly Meeting",
          allDay:true,
          start:new Date(2022,10,1),
          end:new Date(2022,10,1)
          
          },
]

const Calender = () => {
  return (
    <div style={{display:'flex'}}>
      <AddEvent/>
      <Calendar localizer={localizer} events={events}
      startAccessor="start" endAccessor="end" style={{height:800,width:'100%',border:'1px solid rgba(76, 78, 100, 0.2)',paddingTop:20}} eventPropGetter={(event, start, end, isSelected) => ({
        event,
        start,
        end,
        style: { backgroundColor: "rgba(102, 108, 255, 0.12)",color:'rgb(102, 108, 255)', }
      })}/>
    </div>
  )
}

export default Calender
