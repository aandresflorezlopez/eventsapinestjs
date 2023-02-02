import { MigrationInterface, QueryRunner } from 'typeorm';
// npx typeorm-ts-node-commonjs migration:create ./src/database/migrations/UsersRenameNameField
// npx typeorm-ts-node-commonjs migration:run -d ./ormconfig.ts
// npx typeorm-ts-node-commonjs migration:revert -d ./ormconfig.ts

export class UsersRenameNameField1675205421033 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`ALTER TABLE users CHANGE name title varchar(255)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // reverts things made in "up" method
    // await queryRunner.query(`ALTER TABLE users CHANGE title name varchar(255)`);
  }
}
