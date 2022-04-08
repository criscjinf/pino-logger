function getPinoPrettyTarget(): any {
  return {
    target: 'pino-pretty',
    level: process.env.log_console_level || 'info',
    options:  {
      levelFirst: true,
      messageFormat: true,
      ignore: 'pid,hostname'
    }
  }
}

export default getPinoPrettyTarget()
