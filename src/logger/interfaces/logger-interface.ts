import { Logger as PinoLogger } from 'pino'
import { HttpLogger } from "pino-http"
import WhyState from "../states/why-state"
import Log from "./log-interface"

interface ILogger {
  pinoLogger: PinoLogger,
  pinoHttp?: HttpLogger,
  log: Log,
  where(msg: string): WhyState,
  debug(msg: any): void,
  config(targets?: any): void
}

export default ILogger