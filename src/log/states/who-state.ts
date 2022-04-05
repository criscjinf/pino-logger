import BaseState from './base-state'
import WhyState from './why-state'

class WhoState extends BaseState {
  who(msg: string): WhyState {
    // this.log.who = msg
    return new WhyState(this.logger)
  }
}

export default WhoState