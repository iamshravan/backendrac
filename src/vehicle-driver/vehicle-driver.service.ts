import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { RacVehicle } from './entities/rac-vehicle.entity';
import { RacVehicle } from './entities/vehicle-driver.entity';
//import { RacDriver } from './entities/rac-driver.entity';
import { RacDriver } from './entities/vehicle-driver.entity';

@Injectable()
export class VehicleDriverService {
  constructor(
    @InjectRepository(RacVehicle)
    private vehicleRepository: Repository<RacVehicle>,
    @InjectRepository(RacDriver)
    private driverRepository: Repository<RacDriver>,
  ) {}
    
  async search(query: string): Promise<any> {
    const vehicles = await this.vehicleRepository
      .createQueryBuilder('vehicle')
      .where('vehicle.vehicle_number LIKE :query', { query: `%${query}%` })
      .getMany();

    const drivers = await this.driverRepository
      .createQueryBuilder('driver')
      .where('driver.driver_name LIKE :query', { query: `%${query}%` })
      .getMany();

    return {
      vehicles,
      drivers,
    };
  }
}
