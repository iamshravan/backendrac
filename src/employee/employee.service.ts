import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';
import { Signup } from 'src/signup/entities/signup.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,

    @InjectRepository(Signup)  // Repository for rac_login table
    private signupRepository: Repository<Signup>,
  ) {}

  async create(employeeDto: EmployeeDto): Promise<Employee> {
    // Pre-fill the email based on the company
    let emailDomain: string;
    
    

    if (employeeDto.user_type === 'corporate' && employeeDto.company) {
      switch (employeeDto.company) {
        case 'TCS':
          emailDomain = '@tcs.in';
          break;
        case 'RTX':
          emailDomain = '@rtx.in';
          break;
        case 'Diligent':
          emailDomain = '@diligent.com';
          break;
        default:
          emailDomain = '@corporate.com'; // Default corporate domain
          break;
      }
    } else {
      emailDomain = '@gmail.com'; // Default domain for general users
    }

    // Assign the email with the proper domain
    employeeDto.email = `${employeeDto.name.replace(/\s+/g, '').toLowerCase()}${emailDomain}`;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(employeeDto.password, 10);
    employeeDto.password = hashedPassword;

    // Save employee details (with hashed password)
    const employee = this.employeeRepository.create(employeeDto);
    await this.employeeRepository.save(employee);

    // Save login details (with the same hashed password) to rac_login table
    const signup = new Signup();
    signup.username = employeeDto.user_id; // Assuming user_id is used as username in rac_login
    signup.password = hashedPassword;  // Use the same hashed password
    signup.lastlogin = new Date();  // Set lastlogin to current date and time

    await this.signupRepository.save(signup);

    return employee;
  }
}
