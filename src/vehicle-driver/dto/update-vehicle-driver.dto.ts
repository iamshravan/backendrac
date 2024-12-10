import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDriverDto } from './create-vehicle-driver.dto';

export class UpdateVehicleDriverDto extends PartialType(CreateVehicleDriverDto) {}
