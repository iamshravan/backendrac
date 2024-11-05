import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class RacAirport1730790148076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rac_airport",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "city_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "airport_names",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                ],
            }),
        );
        await queryRunner.createForeignKey(
            "rac_airport",
            new TableForeignKey({
                columnNames: ["city_id"],
                referencedTableName: "rac_city",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL", // Set to NULL if the referenced city is deleted
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("rac_airport");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("city_id") !== -1,
        );
        if (foreignKey) {
            await queryRunner.dropForeignKey("rac_airport", foreignKey);
        }
        await queryRunner.dropTable("rac_airport");
    
    }

}
