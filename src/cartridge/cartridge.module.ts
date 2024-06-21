import { Module } from '@nestjs/common';
import { CartridgeService } from './cartridge.service';
import { CartridgeController } from './cartridge.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [CartridgeService],
  controllers: [CartridgeController],
  imports: [DatabaseModule],
})
export class CartridgeModule {}
