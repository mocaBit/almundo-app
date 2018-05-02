const config = {
    "dev": {
      port: 3000,
      database: 'mongodb://127.0.0.1:27017/almundoapp',
    },
    "default": {
      port: 3000,
      database: 'mongodb://dbmongo/almundoapp',
    }
  }
  
exports.get = (env) => {
    return config[env] || config.default;
}