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

  const formatTime = time => ('0' + time).slice(-2)

  const convertMilisecondsToSeconds = ms => Math.floor((ms / 1000) % 60)

  const convertMilisecondsToMinutes = ms => Math.floor((ms / 60000) % 60)

  return (
    <div>
      <p>
        <time>{formatTime(convertMilisecondsToMinutes(time))}:</time>
        <time>{formatTime(convertMilisecondsToSeconds(time))}:</time>
        <time>{formatTime((time / 10) % 100)}</time>
      </p>

      {!isRunning && time === 0 && (
        <button onClick={() => setIsRunning(true)}>Start</button>
      )}

      {isRunning && <button onClick={() => setIsRunning(false)}>Stop</button>}

      {!isRunning && time !== 0 && (
        <button onClick={() => setIsRunning(true)}>Resume</button>
      )}

      {!isRunning && time !== 0 && (
        <button onClick={() => setTime(0)}>Reset</button>
      )}
    </div>
  )
}
