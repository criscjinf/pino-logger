function getMongoTarget(): any {
  let target = null
  
  if (process.env.mongo_log_uri) {
    target = {
      target: 'pino-mongodb',
      level: process.env.log_mongo_level || "info",
      options:  {
        uri: process.env.mongo_log_uri,
        database: process.env.mongo_log_db,
        collection: process.env.mongo_log_collection,
        mongoOptions: {
          auth: {
            username: process.env.mongo_log_user,
            password: process.env.mongo_log_pass
          }
        }
      }
    }
  }

  return target
}

export default getMongoTarget()