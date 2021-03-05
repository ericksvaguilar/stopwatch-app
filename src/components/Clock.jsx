import React, { useState } from 'react'

export const Clock = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(0)

  const startClock = () => {
    setIsRunning(true)

    const id = setInterval(() => {
      setTime(prev => prev + 1)
    }, 10)

    setIntervalId(id)
  }

  const stopClock = () => {
    setIsRunning(false)
    clearInterval(intervalId)
  }

  return (
    <div>
      <p>
        <time dateTime={time}>{time}</time>
        {isRunning ? (
          <button onClick={stopClock}>Stop</button>
        ) : (
          <button onClick={startClock}>Start</button>
        )}
      </p>
    </div>
  )
}
