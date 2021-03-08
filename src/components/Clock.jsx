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
        <time>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</time>
        <time>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</time>
        <time>{('0' + ((time / 10) % 100)).slice(-2)}</time>
      </p>
      {isRunning ? (
        <button onClick={() => setIsRunning(false)}>Stop</button>
      ) : (
        <button onClick={() => setIsRunning(true)}>Start</button>
      )}
    </div>
  )
}
