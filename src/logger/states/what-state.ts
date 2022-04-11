import Log from '../interfaces/log-interface'
import BaseState from './base-state'
import LogState from './log-state'

class WhatState extends BaseState {
  what(msg: string): LogState {
    this.log.what = msg
    return new LogState(this.logger)
  }
}

export default WhatState