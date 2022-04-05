import BaseState from './base-state'
import WhatState from './what-state'


class WhyState extends BaseState {
  why(msg: string): WhatState {
    this.log.why = msg
    return new WhatState(this.logger)
  }
}

export default WhyState