import React, { useState } from 'react'

export const Clock = () => {
  const [time, setTime] = useState('00:00:00')

  return (
    <div>
      <p>
        <time dateTime={time}>{time}</time>
      </p>
    </div>
  )
}
