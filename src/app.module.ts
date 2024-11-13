import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module'; // Import your SignupModule
import { Signup } from './signup/entities/signup.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    SignupModule,
    EmployeeModule, // Include the SignupModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
