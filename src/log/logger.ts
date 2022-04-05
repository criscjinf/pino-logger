import WhereState from "./states/where-state"
import WhyState from "./states/why-state"
import Log from "./interfaces/log-interface"
import pinoLogger from "./pino-logger"

class Logger {
  public log : Log = {
    where: '',
    why: '',    
    what: ''
  } 

  public where(msg: string): WhyState {
    const whereState = new WhereState(this)
    return whereState.where(msg)
  }

  public info() {
    pinoLogger.info(this.log)
  }

  public error() {
    pinoLogger.error(this.log)
  }
}

export default Logger