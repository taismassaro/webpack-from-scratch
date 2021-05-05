import { getWeekdayWithTime } from './dateFormat'
import './style.css'

setInterval(() => {
  const app = document.querySelector('#app')

  if (app) {
    app.textContent = getWeekdayWithTime(new Date())
  }
}, 1000)
