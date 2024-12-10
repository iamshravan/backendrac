import { Controller, Get, Query } from '@nestjs/common';
import { VehicleDriverService } from './vehicle-driver.service';

@Controller('vehicle-driver')
export class VehicleDriverController {
  constructor(private readonly vehicleDriverService: VehicleDriverService) {}

  @Get('search')
  async search(@Query('query') query: string) {
    return this.vehicleDriverService.search(query);
  }
}
