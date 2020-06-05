module.exports={
  server:{
    "development":{
      "port": process.env.PORT || "8081"
    }
  },
  db: {
    "development": {
      "database": process.env.DB_NAME || "koi-erp",
      "user": process.env.DB_USER || "root",
      "password": process.env.DB_PASS || "MySU.Root",
      options: {
        "dialect": process.env.DB_DIALECT || "mysql",
        "host": process.env.DB_HOST || "127.0.0.1",
        "port": process.env.DB_PORT || "35724"
      },
    }
  },
  authentication: {
    "jwtSecret" : process.env.JWT_SECRET || 'secret'
  }
}
