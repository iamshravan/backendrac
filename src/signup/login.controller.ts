// login.controller.ts
import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/create-signup.dto'; // Ensure this path is correct

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() loginDto: LoginDto) {
    const { username, password } = loginDto;

    // Call the login method in the service to validate user and create a record
    try {
      await this.loginService.login(username, password); // Use the new login method
      return { message: 'Login successful' };
    } catch (error) {
      throw new BadRequestException(error.message || 'Incorrect username or password');
    }
  }
}
