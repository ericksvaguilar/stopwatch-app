export const formatTime = time => ('0' + time).slice(-2)

export const convertTimeToSeconds = time => Math.floor((time / 1000) % 60)

export const convertTimeToMinutes = time => Math.floor((time / 60000) % 60)

export const convertTimeToMiliseconds = time => (time / 10) % 100
