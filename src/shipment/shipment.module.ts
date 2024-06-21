import { Module } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ShipmentController } from './shipment.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ShipmentService],
  controllers: [ShipmentController],
  imports: [DatabaseModule],
})
export class ShipmentModule {}
