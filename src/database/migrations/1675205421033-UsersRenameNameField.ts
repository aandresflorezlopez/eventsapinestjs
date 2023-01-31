import { MigrationInterface, QueryRunner } from 'typeorm';
// npx typeorm-ts-node-commonjs migration:create ./src/database/migrations/UsersRenameNameField

export class UsersRenameNameField1675205421033 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "title" TO "name"`,
    ); // reverts things made in "up" method
  }
}
