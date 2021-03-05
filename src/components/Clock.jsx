import React, { useEffect, useState } from 'react'

export const Clock = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId = null

    if (isRunning) {
      intervalId = setInterval(() => setTime(prev => prev + 10), 10)
    } else {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [isRunning])

  return (
    <div>
      <p>
        <time dateTime='00'>00</time>:<time dateTime='00'>00</time>:
        <time dateTime={time}>{time}</time>
      </p>
      {isRunning ? (
        <button onClick={() => setIsRunning(false)}>Stop</button>
      ) : (
        <button onClick={() => setIsRunning(true)}>Start</button>
      )}
    </div>
  )
}
