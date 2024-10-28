import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './entities/employee.entity'; // Import the Employee entity
import { Signup } from 'src/signup/entities/signup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee,Signup]), // Register the Employee entity
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}

