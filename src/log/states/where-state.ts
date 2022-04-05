import BaseState from './base-state'
import WhyState from './why-state'

class WhereState extends BaseState {
  where(msg: string): WhyState {
    this.log.where = msg
    return new WhyState(this.logger)
  }
}

export default WhereState