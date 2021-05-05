import { getWeekdayWithTime } from './dateFormat'

setInterval(() => {
  const app = document.querySelector('#app')

  if (app) {
    app.textContent = getWeekdayWithTime(new Date())
  }
}, 1000)
