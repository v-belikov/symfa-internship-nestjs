import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1677059042970 implements MigrationInterface {
  name = 'Migration1677059042970';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`images\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`image_type\` enum ('cart', 'preview') NOT NULL, \`path\` varchar(255) NOT NULL, \`order\` tinyint NULL, UNIQUE INDEX \`IDX_b27820f9c4eb00f2afc4e5b616\` (\`path\`), INDEX \`IDX_66fac63ed1876a73b16632f04d\` (\`image_type\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`IDX_66fac63ed1876a73b16632f04d\` ON \`images\``);
    await queryRunner.query(`DROP INDEX \`IDX_b27820f9c4eb00f2afc4e5b616\` ON \`images\``);
    await queryRunner.query(`DROP TABLE \`images\``);
  }
}
