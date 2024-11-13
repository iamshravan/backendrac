import { MigrationInterface, QueryRunner } from "typeorm";

export class RacDb1731488996466 implements MigrationInterface {
    name = 'RacDb1731488996466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rac_login\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`lastlogin\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rac_employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` varchar(255) NOT NULL, \`city_id\` int NULL, \`name\` varchar(255) NULL, \`email\` varchar(255) NULL, \`phone\` varchar(20) NULL, \`user_type\` enum ('general', 'corporate') NULL, \`gender\` enum ('male', 'female', 'other') NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_0a95674d6944ac3162eb131450\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_0a95674d6944ac3162eb131450\` ON \`rac_employee\``);
        await queryRunner.query(`DROP TABLE \`rac_employee\``);
        await queryRunner.query(`DROP TABLE \`rac_login\``);
    }

}
