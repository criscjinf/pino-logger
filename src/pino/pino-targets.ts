import { TransportMultiOptions } from "pino"
import mongoTarget from './targets/pino-mongo-target'
import pinoPrettyTarget from "./targets/pino-pretty-target"

function getTargets(extraTargets: any): TransportMultiOptions {
  const targets = [ pinoPrettyTarget]

  if (mongoTarget) {
    targets.push(mongoTarget)
  }

  if (extraTargets && extraTargets.length > 0) {
    targets.push(...extraTargets)
  }

  return {
    targets
  } as TransportMultiOptions
}

export default getTargets