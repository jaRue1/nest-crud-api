import {MigrationInterface, QueryRunner} from "typeorm";

export class CompanyMigration1643777593581 implements MigrationInterface {
    name = 'CompanyMigration1643777593581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "rating" integer NOT NULL, "description" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "price" varchar NOT NULL, "rating" integer NOT NULL, "inStock" boolean NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
