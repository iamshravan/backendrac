import { Test, TestingModule } from '@nestjs/testing';
import { VehicleDriverService } from './vehicle-driver.service';

describe('VehicleDriverService', () => {
  let service: VehicleDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleDriverService],
    }).compile();

    service = module.get<VehicleDriverService>(VehicleDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
