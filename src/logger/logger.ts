import WhereState from "./states/where-state"
import WhyState from "./states/why-state"
import Log from "./interfaces/log-interface"
import getPinoLogger from "../pino"
import { Logger as PinoLogger } from 'pino'
import PinoHttp, { HttpLogger } from "pino-http"
import pino from "pino"

class Logger implements ILogger {
  public log : Log = {
    where: '',
    why: '',
    what: ''
  } 

  public pinoLogger: PinoLogger
  public pinoHttp?: HttpLogger

  constructor(){
    this.pinoLogger = getPinoLogger()
    this.configHttpLogger()
  }

  private configHttpLogger() {
    if (process.env.log_http){
      this.pinoHttp = PinoHttp({
        logger:this.pinoLogger,
        useLevel: 'info'
      })
    }    
  }

  public where(msg: string): WhyState {
    const whereState = new WhereState(this)
    return whereState.where(msg)
  }

  public debug(msg: any): void {
    if(this.pinoLogger){
      this.pinoLogger.debug(msg)
    }
  }
  config(targets?: any): void{
    this.pinoLogger = getPinoLogger(targets)
    this.configHttpLogger()
  }
}

export const logger = new Logger()

export interface ILogger {
  pinoLogger: PinoLogger,
  pinoHttp?: HttpLogger,
  log: Log,
  where(msg: string): WhyState,
  debug(msg: any): void,
  config(targets?: any): void
}