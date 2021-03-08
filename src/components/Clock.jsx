import styles from '../styles/components/Clock.module.css'
import React, { useEffect, useState } from 'react'
import {
  formatTime,
  convertTimeToSeconds,
  convertTimeToMinutes,
  convertTimeToMiliseconds,
} from '../utilities/TimeUtils'

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
    <div className={styles.clockContainer}>
      <p>
        <time>{formatTime(convertTimeToMinutes(time))}:</time>
        <time>{formatTime(convertTimeToSeconds(time))}:</time>
        <time>{formatTime(convertTimeToMiliseconds(time))}</time>
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
