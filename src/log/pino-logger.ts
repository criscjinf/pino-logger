import moment from "moment"
import Pino, { transport } from "pino"


const pino = Pino({
  timestamp: () => `, "time": "${moment().format('DD/MM/YYYY hh:mm:ss')}"`,
  transport: {
    target: 'pino-pretty',
    options: {
      levelFirst: true,
      messageFormat: true,
      ignore: 'pid,hostname'
    }
  },

  formatters: {
    log: (obj: any) => {
      return {
        application: process.env.appname,
        version: process.env.version,
        ...obj
      }
    }
  }
  
})

export default pino