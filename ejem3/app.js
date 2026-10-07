import df from "dateformat"

let lapse = process.env.LAPSE || 1000

setInterval(() => {
  console.log(`la hora es de ${df(new Date(), "dd/mm/yyyy HH:MM:ss")}`)
}, lapse)