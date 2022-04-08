import dotenv from 'dotenv'
dotenv.config()

import {logger} from './logger/logger'

'use strict'

const http = require('http')
const server = http.createServer(handle)

function handle (req: any, res: any) {
  if (logger.pinoHttp) logger.pinoHttp(req, res)
  req.log.info('something else')
  res.end('hello world')
}

server.listen(3000)