const AuthKey = 'SOMEAUTHKEY'

export const Config = {
  port: 5555,
  key: AuthKey,
  saltRound: 10,
  dev: true,
  userImagePath: '/upload',
  mongo: {
    prod: {
      host: 'localhost',
      username: 'root',
      password: '',
      port: 27017,
      database: 'yourdbname'
    },
    dev: {
      host: 'localhost',
      username: 'root',
      password: '',
      port: 27017,
      database: 'yourdbname'
    }
  },
  database: {
    prod: {
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3306,
      database: 'yourdbname'
    },
    dev: {
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3306,
      database: 'yourdbname'
    }
  }
}