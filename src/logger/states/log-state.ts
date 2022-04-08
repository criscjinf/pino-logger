import BaseState from './base-state'


class LogState extends BaseState {
  public info() {    
    this.logger.pinoLogger.info(this.log)
  }

  public error(e: Error) {
    this.log.error = e
    this.logger.pinoLogger.error(this.log)
  }

  public debug() {
    this.logger.pinoLogger.debug(this.log)
  }

  public fatal() {
    this.logger.pinoLogger.fatal(this.log)
  }

  public warn() {
    this.logger.pinoLogger.warn(this.log)
  }

  public trace() {
    this.logger.pinoLogger.trace(this.log)
  }
}

export default LogState