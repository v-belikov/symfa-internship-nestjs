import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1677671265398 implements MigrationInterface {
    name = 'Migration1677671265398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`images\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`image_type\` enum ('cart', 'preview') NOT NULL, \`path\` varchar(255) NOT NULL, \`order\` tinyint NULL, \`productId\` varchar(36) NULL, UNIQUE INDEX \`IDX_b27820f9c4eb00f2afc4e5b616\` (\`path\`), INDEX \`IDX_66fac63ed1876a73b16632f04d\` (\`image_type\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`availableSizes\` json NOT NULL, \`currencyFormat\` varchar(1) NOT NULL, \`currencyId\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`installments\` int NOT NULL, \`isFreeShipping\` tinyint NOT NULL, \`price\` float NOT NULL, \`sku\` bigint NOT NULL, \`style\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_7af50639264735c79e918af6089\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_7af50639264735c79e918af6089\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP INDEX \`IDX_66fac63ed1876a73b16632f04d\` ON \`images\``);
        await queryRunner.query(`DROP INDEX \`IDX_b27820f9c4eb00f2afc4e5b616\` ON \`images\``);
        await queryRunner.query(`DROP TABLE \`images\``);
    }

}
