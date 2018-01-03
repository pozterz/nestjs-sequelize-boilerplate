import { createConnection } from 'typeorm'
import { Constant } from '../config/constant'

export const db = [
  {
    provide: Constant.databaseRepo,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vixtorhunt',
      logging: ["query", "error"],
      logger: "file",
      entities: [
        __dirname + '/../**/*.model{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];