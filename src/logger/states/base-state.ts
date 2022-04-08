import Log from "../interfaces/log-interface"
import {ILogger} from "../logger"

class BaseState {
  public logger: ILogger
  public log: Log

  constructor(logger: ILogger) {
    this.log = logger.log
    this.logger = logger
  }
}

export default BaseState