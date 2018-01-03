import { Sequelize } from 'sequelize-typescript';

export const db = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'prettydoll',
      });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];