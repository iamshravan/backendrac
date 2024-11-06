import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class RacDisposalDuty1730885426663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "rac_disposal_duty",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "user_id",
                  type: "varchar",
                  length: "25",
                  isNullable: true,
                },
                {
                  name: "pd_from",
                  type: "varchar",
                  length: "150",
                  isNullable: true,
                },
                {
                  name: "pd_to",
                  type: "varchar",
                  length: "150",
                  isNullable: true,
                },
                {
                  name: "from_latitude",
                  type: "decimal",
                  precision: 10,
                  scale: 8,
                  isNullable: true,
                },
                {
                  name: "from_longitude",
                  type: "decimal",
                  precision: 11,
                  scale: 8,
                  isNullable: true,
                },
                {
                  name: "to_latitude",
                  type: "decimal",
                  precision: 10,
                  scale: 8,
                  isNullable: true,
                },
                {
                  name: "to_longitude",
                  type: "decimal",
                  precision: 11,
                  scale: 8,
                  isNullable: true,
                },
                {
                  name: "date_time",
                  type: "datetime",
                  isNullable: true,
                },
                {
                  name: "flag",
                  type: "enum",
                  enum: ["1", "0"],
                  isNullable: true,
                },
                {
                  name: "vehicle_type_id",
                  type: "int",
                  isNullable: true,
                },
                {
                  name: "package_id",
                  type: "int",
                  isNullable: true,
                },
                {
                  name: "req_id",
                  type: "varchar",
                  length: "25",
                  isUnique: true,
                  isNullable: true,
                },
                {
                  name: "payment_type_id",
                  type: "int",
                  isNullable: true,
                },
              ],
            })
          );
      
          // Add indexes for `vehicle_type_id`, `package_id`, and `payment_type_id`
          await queryRunner.createIndex(
            "rac_disposal_duty",
            new TableIndex({
              name: "IDX_VEHICLE_TYPE_ID",
              columnNames: ["vehicle_type_id"],
            })
          );
      
          await queryRunner.createIndex(
            "rac_disposal_duty",
            new TableIndex({
              name: "IDX_PACKAGE_ID",
              columnNames: ["package_id"],
            })
          );
      
          await queryRunner.createIndex(
            "rac_disposal_duty",
            new TableIndex({
              name: "IDX_PAYMENT_TYPE_ID",
              columnNames: ["payment_type_id"],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("rac_disposal_duty", "IDX_VEHICLE_TYPE_ID");
        await queryRunner.dropIndex("rac_disposal_duty", "IDX_PACKAGE_ID");
        await queryRunner.dropIndex("rac_disposal_duty", "IDX_PAYMENT_TYPE_ID");
        await queryRunner.dropTable("rac_disposal_duty");
    }

}
