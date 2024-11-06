import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class RacAirportDuty1730885716164 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "rac_airport_duty",
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
                  name: "req_id",
                  type: "varchar",
                  length: "25",
                  isUnique: true,
                  isNullable: true,
                },
                {
                  name: "airport_id",
                  type: "int",
                  isNullable: true,
                },
                {
                  name: "service",
                  type: "enum",
                  enum: ["p", "d"],
                  isNullable: true,
                },
                {
                  name: "pd_address",
                  type: "varchar",
                  length: "150",
                  isNullable: true,
                },
                {
                  name: "pd_latitude",
                  type: "decimal",
                  precision: 10,
                  scale: 8,
                  isNullable: true,
                },
                {
                  name: "pd_longitude",
                  type: "decimal",
                  precision: 11,
                  scale: 8,
                  isNullable: true,
                },
                {
                  name: "flight_no",
                  type: "varchar",
                  length: "25",
                  isNullable: true,
                },
                {
                  name: "flight_name",
                  type: "varchar",
                  length: "25",
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
                  name: "payment_type",
                  type: "varchar",
                  length: "25",
                  isNullable: true,
                },
                {
                  name: "vehicle_typeid",
                  type: "int",
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
      
          // Add indexes for `airport_id`, `vehicle_typeid`, and `payment_type_id`
          await queryRunner.createIndex(
            "rac_airport_duty",
            new TableIndex({
              name: "IDX_AIRPORT_ID",
              columnNames: ["airport_id"],
            })
          );
      
          await queryRunner.createIndex(
            "rac_airport_duty",
            new TableIndex({
              name: "IDX_VEHICLE_TYPE_ID",
              columnNames: ["vehicle_typeid"],
            })
          );
      
          await queryRunner.createIndex(
            "rac_airport_duty",
            new TableIndex({
              name: "IDX_PAYMENT_TYPE_ID",
              columnNames: ["payment_type_id"],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex("rac_airport_duty", "IDX_AIRPORT_ID");
    await queryRunner.dropIndex("rac_airport_duty", "IDX_VEHICLE_TYPE_ID");
    await queryRunner.dropIndex("rac_airport_duty", "IDX_PAYMENT_TYPE_ID");
    await queryRunner.dropTable("rac_airport_duty");
    }

}
