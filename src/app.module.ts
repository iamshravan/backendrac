import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module'; // Import your SignupModule
import { Signup } from './signup/entities/signup.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',          // Your MySQL host
      port: 3306,                 // Default MySQL port
      username: 'root',           // Replace with your MySQL username
      password: 'root@123',       // Replace with your MySQL password
      database: 'rac',            // Your MySQL database name
      entities: [Signup,Employee],         // Register the Signup entity here
      synchronize: true,          // Set to true for development; false in production
    }),
    SignupModule,
    EmployeeModule,  // Include the SignupModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
