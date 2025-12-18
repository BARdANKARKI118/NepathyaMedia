import React from 'react'
import "./EventHighlights.css"
import EventCard from './EventCard'
import { Icon } from '@iconify/react'
const EventHighlights = () => {
  return (
    <div>
        <h1 className='eventText'>Our  <span className='eventColor'>Event  Highlights</span></h1>
        <div className='eventLine'></div>

        <div className='event-container'>
            <EventCard 
            icon={<Icon icon="jam:mic"/>}
            heading="Our Podcast"
            msg="If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team."
            />

            <EventCard
            icon={<Icon icon="cib:hackster"/>}
            heading="Nepathon by Fusion Stack"
            msg="If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team."
            />

            <EventCard
            icon={<Icon icon="jam:calendar"/>}
            heading="Nepathya Annual Function"
            msg="If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team."
            />
        </div>
    </div> 

  )
}

export default EventHighlights