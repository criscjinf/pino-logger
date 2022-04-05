import dotenv from 'dotenv'
import Logger from './log/logger'

dotenv.config()

function testeErro() {
  const logger = new Logger()
  try{
    throw new Error(JSON.stringify({teste: 123, fap: 789}))
  } catch (e: any) {
    console.log(e.stack.split('\n'))
    // logger.where('index.ts | testeErro')
    //   .why('Erro desconhecido')
    //   .what(e.message)
    //   .error()
  }
}

testeErro()
