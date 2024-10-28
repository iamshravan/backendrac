// employee.dto.ts
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsOptional()
  @IsString()
  city_id?: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsEnum(['general', 'corporate'])
  user_type: 'general' | 'corporate';

  @IsOptional() // Add the company as optional; only required for corporate users
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  gender?: 'male' | 'female' | 'other';

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsEmail()
  email?: string; // You can also validate email format if needed
}
