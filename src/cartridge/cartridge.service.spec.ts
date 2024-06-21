import { Test, TestingModule } from '@nestjs/testing';
import { CartridgeService } from './cartridge.service';

describe('CartridgeService', () => {
  let service: CartridgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartridgeService],
    }).compile();

    service = module.get<CartridgeService>(CartridgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
