import { DataSource, DataSourceOptions  } from "typeorm";


export const dataSourceOptions: DataSourceOptions ={
    type: 'mysql',
    host: 'localhost',          // Your MySQL host
    port: 3306,                 // Default MySQL port
    username: 'root',           // Replace with your MySQL username
    password: 'root@123',       // Replace with your MySQL password
    database: 'rac',            // Your MySQL database name
    entities: ['dist/**/*.entity.js'],         // Register the Signup entity here
    //synchronize: true,     
    migrations: ['dist/db/migrations/*.js']
};


const dataSource = new DataSource(dataSourceOptions);

export default dataSource;