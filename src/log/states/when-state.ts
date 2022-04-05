import BaseState from './base-state'
import WhereState from './where-state'

class WhenState extends BaseState {
  when(msg: string): WhereState {
    // this.log.when = msg
    return new WhereState(this.logger)
  }
}

export default WhenState