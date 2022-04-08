import moment from "moment"
import Pino, { Logger } from "pino"
import getPinoTargets from "./pino-targets"

function getPinoLogger(targets?: any): Logger {
  const pinoLogger = Pino({
    timestamp: () => `, "time": "${moment().format('DD/MM/YYYY hh:mm:ss')}"`,
    level: 'trace',
    transport: getPinoTargets(targets),
    formatters: {
      log: (obj: any) => {
        const log = {
          application: process.env.appname,
          version: process.env.version,
          ...obj
        }
        if (obj.hasOwnProperty('error')){
          log.error = {
            message: obj.error.message,
            stack: obj.error.stack
          }
        }
  
        return log
      }
    }
    
  })

  return pinoLogger
}

export default getPinoLogger