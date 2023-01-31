import { connectionSource } from 'ormconfig';

// move to env variables
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return connectionSource.initialize();
    },
  },
];
