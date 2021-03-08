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
      <div className={styles.clockTime}>
        <time>{formatTime(convertTimeToMinutes(time))}:</time>
        <time>{formatTime(convertTimeToSeconds(time))}:</time>
        <time>{formatTime(convertTimeToMiliseconds(time))}</time>
      </div>

      <div>
        {!isRunning && time === 0 && (
          <button onClick={() => setIsRunning(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              enable-background='new 0 0 24 24'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#000000'
            >
              <g>
                <rect fill='none' height='24' width='24' />
                <path d='M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 s10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M11,8H9v8h2V8z M17,12l-5-4v8L17,12z' />
              </g>
            </svg>
          </button>
        )}

        {isRunning && (
          <button onClick={() => setIsRunning(false)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#000000'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
            </svg>
          </button>
        )}

        {!isRunning && time !== 0 && (
          <button onClick={() => setIsRunning(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#000000'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z' />
            </svg>
          </button>
        )}

        {!isRunning && time !== 0 && (
          <button onClick={() => setTime(0)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              enable-background='new 0 0 24 24'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#000000'
            >
              <g>
                <path d='M0,0h24v24H0V0z' fill='none' />
              </g>
              <g>
                <g>
                  <path d='M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z' />
                </g>
              </g>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
