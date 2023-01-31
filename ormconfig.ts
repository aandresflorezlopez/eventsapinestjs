import { DataSourceOptions, DataSource } from 'typeorm';

export const ormconfig: DataSourceOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'events',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
};

export const connectionSource = new DataSource(ormconfig);
