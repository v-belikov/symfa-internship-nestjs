import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1677710174076 implements MigrationInterface {
  name = 'Migration1677710174076';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`products\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`title\` varchar(255) NOT NULL, \`price\` float NOT NULL, \`currencyFormat\` varchar(3) NOT NULL, \`availableSizes\` varchar(255) NOT NULL, \`currencyId\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`installments\` int NOT NULL, \`isFreeShipping\` tinyint NOT NULL, \`style\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(`ALTER TABLE \`images\` ADD \`productId\` varchar(36) NULL`);
    await queryRunner.query(
      `ALTER TABLE \`images\` ADD CONSTRAINT \`FK_7af50639264735c79e918af6089\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_7af50639264735c79e918af6089\``);
    await queryRunner.query(`ALTER TABLE \`images\` DROP COLUMN \`productId\``);
    await queryRunner.query(`DROP TABLE \`products\``);
  }
}
