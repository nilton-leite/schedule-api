import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1678659806642 implements MigrationInterface {
    name = 'migration1678659806642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specialty" ("specialtyId" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "timePerQuery" integer NOT NULL, CONSTRAINT "PK_9e002e236dadadf3d95d4325b69" PRIMARY KEY ("specialtyId"))`);
        await queryRunner.query(`CREATE TABLE "doctorSpecialty" ("doctorSpecialtyId" SERIAL NOT NULL, "doctorId" integer, "specialtyId" integer, CONSTRAINT "PK_05ee71114e27fec345a1693cfdf" PRIMARY KEY ("doctorSpecialtyId"))`);
        await queryRunner.query(`CREATE TABLE "doctor" ("doctorId" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "dateBirth" TIMESTAMP NOT NULL, "document" character varying NOT NULL, "phone" character varying NOT NULL, "timeSendConfirmation" integer NOT NULL, "workDays" json NOT NULL, "status" integer NOT NULL, CONSTRAINT "PK_36ae3cd9fc1f175ed367e4ecb9f" PRIMARY KEY ("doctorId"))`);
        await queryRunner.query(`CREATE TABLE "patient" ("patientId" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "dateBirth" TIMESTAMP NOT NULL, "document" character varying NOT NULL, "phone" character varying NOT NULL, "zipCode" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying NOT NULL, "acceptedMessage" boolean NOT NULL, "healthInsuranceId" integer, CONSTRAINT "PK_9e4aae494b9d607dd7476c49f03" PRIMARY KEY ("patientId"))`);
        await queryRunner.query(`CREATE TABLE "queries" ("queryId" SERIAL NOT NULL, "uuid" character varying NOT NULL, "datetime" TIMESTAMP WITH TIME ZONE NOT NULL, "obs" text NOT NULL, "scheduleId" integer, CONSTRAINT "PK_a3e998a89bafa88673afa667b1c" PRIMARY KEY ("queryId"))`);
        await queryRunner.query(`CREATE TABLE "schedule" ("scheduleId" SERIAL NOT NULL, "uuid" character varying NOT NULL, "data" TIMESTAMP NOT NULL, "time" TIME NOT NULL, "hasHealtInsurance" boolean NOT NULL, "fisrtQuery" boolean NOT NULL, "obs" text NOT NULL, "healthInsuranceId" integer, CONSTRAINT "PK_c7e04f67bbcc2bd68ec5c996e1f" PRIMARY KEY ("scheduleId"))`);
        await queryRunner.query(`CREATE TABLE "healthInsurance" ("healthInsuranceId" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "status" integer NOT NULL, CONSTRAINT "PK_30c7c215eec05591ecfb4487c5f" PRIMARY KEY ("healthInsuranceId"))`);
        await queryRunner.query(`CREATE TABLE "doctorInsurance" ("doctorInsuranceId" SERIAL NOT NULL, "doctorId" integer, "healthInsuranceId" integer, CONSTRAINT "PK_9628db592effd8f1476fc636da6" PRIMARY KEY ("doctorInsuranceId"))`);
        await queryRunner.query(`ALTER TABLE "doctorSpecialty" ADD CONSTRAINT "FK_5d8b561735702d95d7c070b9bd8" FOREIGN KEY ("doctorId") REFERENCES "doctor"("doctorId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctorSpecialty" ADD CONSTRAINT "FK_2608df7724aa375e3341c3aa4b4" FOREIGN KEY ("specialtyId") REFERENCES "specialty"("specialtyId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "FK_00774137d9278e2b7962dbc38a9" FOREIGN KEY ("healthInsuranceId") REFERENCES "healthInsurance"("healthInsuranceId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "queries" ADD CONSTRAINT "FK_46cde0743725728aec216fe48e9" FOREIGN KEY ("scheduleId") REFERENCES "schedule"("scheduleId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_207f9809f8d6bfad3214bed9b7a" FOREIGN KEY ("healthInsuranceId") REFERENCES "healthInsurance"("healthInsuranceId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctorInsurance" ADD CONSTRAINT "FK_caecaaff38c6eef57fe4adf57b4" FOREIGN KEY ("doctorId") REFERENCES "doctor"("doctorId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctorInsurance" ADD CONSTRAINT "FK_f966771b8be1fc7de53749ed281" FOREIGN KEY ("healthInsuranceId") REFERENCES "healthInsurance"("healthInsuranceId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctorInsurance" DROP CONSTRAINT "FK_f966771b8be1fc7de53749ed281"`);
        await queryRunner.query(`ALTER TABLE "doctorInsurance" DROP CONSTRAINT "FK_caecaaff38c6eef57fe4adf57b4"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_207f9809f8d6bfad3214bed9b7a"`);
        await queryRunner.query(`ALTER TABLE "queries" DROP CONSTRAINT "FK_46cde0743725728aec216fe48e9"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "FK_00774137d9278e2b7962dbc38a9"`);
        await queryRunner.query(`ALTER TABLE "doctorSpecialty" DROP CONSTRAINT "FK_2608df7724aa375e3341c3aa4b4"`);
        await queryRunner.query(`ALTER TABLE "doctorSpecialty" DROP CONSTRAINT "FK_5d8b561735702d95d7c070b9bd8"`);
        await queryRunner.query(`DROP TABLE "doctorInsurance"`);
        await queryRunner.query(`DROP TABLE "healthInsurance"`);
        await queryRunner.query(`DROP TABLE "schedule"`);
        await queryRunner.query(`DROP TABLE "queries"`);
        await queryRunner.query(`DROP TABLE "patient"`);
        await queryRunner.query(`DROP TABLE "doctor"`);
        await queryRunner.query(`DROP TABLE "doctorSpecialty"`);
        await queryRunner.query(`DROP TABLE "specialty"`);
    }

}
