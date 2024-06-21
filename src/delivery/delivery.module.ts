import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [DeliveryService],
  controllers: [DeliveryController],
  imports: [DatabaseModule],
})
export class DeliveryModule {}
