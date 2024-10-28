import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { Signup } from './entities/signup.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Signup,Employee])],  // Register the Signup entity
  controllers: [LoginController],
  providers: [LoginService],
})
export class SignupModule {}
