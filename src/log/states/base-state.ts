import Log from "../interfaces/log-interface"
import Logger from "../logger"

class BaseState {
  public logger: Logger
  public log: Log

  constructor(logger: Logger) {
    this.log = logger.log
    this.logger = logger
  }
}

export default BaseState