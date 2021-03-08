import { Clock } from './components/Clock'
import styles from './styles/App.module.css'

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1>Stopwatch App</h1>
      <Clock />
    </div>
  )
}
