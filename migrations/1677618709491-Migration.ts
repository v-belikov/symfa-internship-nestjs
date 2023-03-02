import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1677618709491 implements MigrationInterface {
  name = 'Migration1677618709491';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`images\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`image_type\` enum ('cart', 'preview') NOT NULL, \`path\` varchar(255) NOT NULL, \`order\` tinyint NULL, \`productId\` varchar(36) NULL, UNIQUE INDEX \`IDX_b27820f9c4eb00f2afc4e5b616\` (\`path\`), INDEX \`IDX_66fac63ed1876a73b16632f04d\` (\`image_type\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`products\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`available_sizes\` json NOT NULL, \`currency_format\` varchar(1) NOT NULL, \`currency_id\` varchar(3) NOT NULL, \`description\` varchar(50) NOT NULL, \`installments\` tinyint NOT NULL, \`is_free_shipping\` tinyint NOT NULL, \`price\` smallint NOT NULL, \`style\` varchar(40) NOT NULL, \`title\` varchar(40) NOT NULL, \`imageCartId\` varchar(36) NULL, UNIQUE INDEX \`REL_7f944a9f190cb9e095602816d1\` (\`imageCartId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`images\` ADD CONSTRAINT \`FK_7af50639264735c79e918af6089\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD CONSTRAINT \`FK_7f944a9f190cb9e095602816d18\` FOREIGN KEY (\`imageCartId\`) REFERENCES \`images\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_7f944a9f190cb9e095602816d18\``);
    await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_7af50639264735c79e918af6089\``);
    await queryRunner.query(`DROP INDEX \`REL_7f944a9f190cb9e095602816d1\` ON \`products\``);
    await queryRunner.query(`DROP TABLE \`products\``);
    await queryRunner.query(`DROP INDEX \`IDX_66fac63ed1876a73b16632f04d\` ON \`images\``);
    await queryRunner.query(`DROP INDEX \`IDX_b27820f9c4eb00f2afc4e5b616\` ON \`images\``);
    await queryRunner.query(`DROP TABLE \`images\``);
  }
}
