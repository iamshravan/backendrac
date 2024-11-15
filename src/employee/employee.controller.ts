// employee.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Controller('signup')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() employeeDto: EmployeeDto): Promise<Employee> {
    return this.employeeService.create(employeeDto);
  }
}
