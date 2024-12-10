import { Test, TestingModule } from '@nestjs/testing';
import { VehicleDriverController } from './vehicle-driver.controller';
import { VehicleDriverService } from './vehicle-driver.service';

describe('VehicleDriverController', () => {
  let controller: VehicleDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleDriverController],
      providers: [VehicleDriverService],
    }).compile();

    controller = module.get<VehicleDriverController>(VehicleDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
