import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RacLogin1730879425489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "rac_login",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "password",
                  type: "varchar",
                  length: "255",
                  isNullable: false,
                },
                {
                  name: "lastlogin",
                  type: "datetime",
                  isNullable: false,
                },
                {
                  name: "username",
                  type: "varchar",
                  length: "255",
                  isNullable: false,
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rac_login");
    }

}
