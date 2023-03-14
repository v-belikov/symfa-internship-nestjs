import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1678548708199 implements MigrationInterface {
    name = 'Migration1678548708199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
    }

}
