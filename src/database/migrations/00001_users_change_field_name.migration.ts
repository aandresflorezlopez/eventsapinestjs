import { MigrationInterface, QueryRunner } from 'typeorm';

export class UsersRefactoringFieldName implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "name" TO "title"`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "title" TO "name"`,
    ); // reverts things made in "up" method
  }
}
