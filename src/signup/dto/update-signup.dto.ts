import { PartialType } from '@nestjs/mapped-types';
import { LoginDto } from './create-signup.dto';

export class UpdateSignupDto extends PartialType(LoginDto) {}
