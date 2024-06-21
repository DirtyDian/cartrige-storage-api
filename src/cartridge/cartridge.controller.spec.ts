import { Test, TestingModule } from '@nestjs/testing';
import { CartridgeController } from './cartridge.controller';

describe('CartridgeController', () => {
  let controller: CartridgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartridgeController],
    }).compile();

    controller = module.get<CartridgeController>(CartridgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
