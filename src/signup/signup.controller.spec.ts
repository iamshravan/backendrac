import { Test, TestingModule } from '@nestjs/testing';
import { SignupController } from './login.controller';
import { SignupService } from './login.service';

describe('SignupController', () => {
  let controller: SignupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignupController],
      providers: [SignupService],
    }).compile();

    controller = module.get<SignupController>(SignupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
