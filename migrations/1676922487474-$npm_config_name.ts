import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1676922487474 implements MigrationInterface {
    name = '$npmConfigName1676922487474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agreement" ("agreementId" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "status" integer NOT NULL, CONSTRAINT "PK_2ccf1c96159c77f933be7b97424" PRIMARY KEY ("agreementId"))`);
        await queryRunner.query(`CREATE TABLE "specialty" ("specialtyId" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "timePerQuery" integer NOT NULL, CONSTRAINT "PK_9e002e236dadadf3d95d4325b69" PRIMARY KEY ("specialtyId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "specialty"`);
        await queryRunner.query(`DROP TABLE "agreement"`);
    }

}
