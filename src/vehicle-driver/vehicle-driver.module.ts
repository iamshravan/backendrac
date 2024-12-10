import { Module } from '@nestjs/common';
import { VehicleDriverService } from './vehicle-driver.service';
import { VehicleDriverController } from './vehicle-driver.controller';
import { RacDriver, RacVehicle } from './entities/vehicle-driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RacVehicle,RacDriver])],
  controllers: [VehicleDriverController],
  providers: [VehicleDriverService],
})
export class VehicleDriverModule {}
