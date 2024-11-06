import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RacPaymentType1730877181154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "rac_payment_type",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "payment_type",
                  type: "varchar",
                  length: "25",
                  isNullable: false,
                },
                {
                  name: "cost_center_code",
                  type: "varchar",
                  length: "25",
                  isNullable: true,
                },
                {
                  name: "airport_req_id",
                  type: "varchar",
                  length: "25",
                  isNullable: true,
                },
                {
                  name: "disposal_req_id",
                  type: "varchar",
                  length: "25",
                  isNullable: true,
                },
              ],
              indices: [
                { columnNames: ["airport_req_id"] },
                { columnNames: ["disposal_req_id"] },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rac_payment_type");
    }

}
