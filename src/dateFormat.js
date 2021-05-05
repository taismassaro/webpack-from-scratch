export function getWeekdayWithTime (date) {
  const WEEKDAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const currentWeekday = WEEKDAYS[date.getDay()]
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  return `${currentWeekday}, ${time}`
}