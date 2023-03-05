import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1678027463918 implements MigrationInterface {
    name = 'Migration1678027463918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`availableSizes\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`availableSizes\` json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`availableSizes\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`availableSizes\` varchar(255) NOT NULL`);
    }

}
