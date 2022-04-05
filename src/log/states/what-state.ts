import Log from '../interfaces/log-interface'
import Logger from '../logger'
import BaseState from './base-state'

class WhatState extends BaseState {
  what(msg: string): Logger {
    this.log.what = msg
    return this.logger
  }
}

export default WhatState