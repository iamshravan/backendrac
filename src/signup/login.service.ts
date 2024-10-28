// login.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from 'src/employee/entities/employee.entity';
import { Signup } from './entities/signup.entity'; // Update path as necessary
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Signup)
    private signupRepository: Repository<Signup>,
  ) {}

  // Validate user credentials against the employee table
  async validateUser(user_id: string, password: string): Promise<boolean> {
    const employee = await this.employeeRepository.findOne({ where: { user_id } });

    if (!employee) {
      return false; // User not found
    }

    // Compare provided password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, employee.password);
    return isPasswordValid;
  }

  // Create a login record if credentials are valid
  async login(user_id: string, password: string): Promise<Signup> {
    // Validate the user's credentials
    const isValid = await this.validateUser(user_id, password);
    if (!isValid) {
      throw new BadRequestException('Incorrect username or password'); // Handle incorrect credentials
    }

    // If validation is successful, create a login record
    return this.createLoginRecord(user_id);
  }

  // Create a login record based on the employee's password
  async createLoginRecord(user_id: string): Promise<Signup> {
    const employee = await this.employeeRepository.findOne({ where: { user_id } });

    if (!employee) {
      throw new BadRequestException('Employee not found');
    }

    const newUser = new Signup();
    newUser.username = user_id; // 
    newUser.password = employee.password; // Use the employee's password (ensure this is handled securely)
    newUser.lastlogin = new Date(); // Set last login date

    return this.signupRepository.save(newUser); // Save to rac_login table
  }
}
