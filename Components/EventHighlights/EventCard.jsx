import React from 'react'

const EventCard = ({icon,heading,msg,photo,}) => {
  return (
    <div>
        <div>{icon}</div>
        <h1>{heading}</h1>
        <p>{msg}</p>
        <img src="{photo}" alt="" />
    </div>
  )
}

export default EventCard