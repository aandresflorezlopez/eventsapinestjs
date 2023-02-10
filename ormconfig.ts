import { join } from 'path';
import { DataSourceOptions, DataSource } from 'typeorm';

// fucking error about how I was importing entities and migrations:
// https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module
// use: entities: [join(__dirname, '**', '*.entity.{ts,js}')]
// instead of: entities: [__dirname + '/../**/*.entity{.ts,.js}']

export const ormconfig: DataSourceOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'events',
  synchronize: true,
  logging: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
};

export const connectionSource = new DataSource(ormconfig);

export default ormconfig;
