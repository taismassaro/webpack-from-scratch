import { getWeekdayWithTime } from './dateFormat'
import stylesheetPath from './style.css'

setInterval(() => {
  const app = document.querySelector('#app')

  if (app) {
    app.textContent = getWeekdayWithTime(new Date())
  }
}, 1000)

document.addEventListener('DOMContentLoaded', () => {
  const tag = document.createElement('link')
  tag.setAttribute('rel', 'stylesheet')
  tag.setAttribute('type', 'text/css')
  tag.setAttribute('href', stylesheetPath)
  document.querySelector('head').appendChild(tag)
})