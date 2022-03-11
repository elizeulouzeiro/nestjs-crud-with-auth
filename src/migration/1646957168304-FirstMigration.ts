import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstMigration1646957168304 implements MigrationInterface {
  name = 'FirstMigration1646957168304';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "book_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "release_date" TIMESTAMP NOT NULL, "authorId" uuid, CONSTRAINT "PK_3ea5638ccafa8799838e68fad46" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "author_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_b150f6a93966648bfee48fcab2b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "book_entity" ADD CONSTRAINT "FK_7b9a5307408b20b7dc7be017f21" FOREIGN KEY ("authorId") REFERENCES "author_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "book_entity" DROP CONSTRAINT "FK_7b9a5307408b20b7dc7be017f21"`,
    );
    await queryRunner.query(`DROP TABLE "author_entity"`);
    await queryRunner.query(`DROP TABLE "book_entity"`);
  }
}
