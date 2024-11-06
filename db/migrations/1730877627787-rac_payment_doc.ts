import { MigrationInterface, QueryRunner, Table, TableIndex, TableUnique } from "typeorm";

export class RacPaymentDoc1730877627787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
              new Table({
                name: "rac_payment_doc",
                columns: [
                  {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                  },
                  {
                    name: "req_id",
                    type: "varchar",
                    length: "25",
                    isNullable: true,
                  },
                  {
                    name: "transaction_no",
                    type: "int",
                    isNullable: true,
                  },
                  {
                    name: "utr_no",
                    type: "int",
                    isNullable: true,
                  },
                  {
                    name: "payment_type",
                    type: "int",
                    isNullable: true,
                  },
                  {
                    name: "amount",
                    type: "decimal",
                    precision: 10,
                    scale: 2,
                    isNullable: true,
                  },
                  {
                    name: "acc_number",
                    type: "varchar",
                    length: "25",
                    isNullable: true,
                  },
                  {
                    name: "date_time",
                    type: "datetime",
                    isNullable: true,
                  },
                ],
              })
            );
        
            // Unique index for `transaction_no`
            await queryRunner.createIndex(
              "rac_payment_doc",
              new TableIndex({
                name: "IDX_TRANSACTION_NO_UNIQUE",
                columnNames: ["transaction_no"],
                isUnique: true,
              })
            );
        
            // Unique index for `utr_no`
            await queryRunner.createIndex(
              "rac_payment_doc",
              new TableIndex({
                name: "IDX_UTR_NO_UNIQUE",
                columnNames: ["utr_no"],
                isUnique: true,
              })
            );
        
            // Index for `payment_type`
            await queryRunner.createIndex(
              "rac_payment_doc",
              new TableIndex({
                name: "IDX_PAYMENT_TYPE",
                columnNames: ["payment_type"],
              })
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rac_payment_doc");

    }

}
