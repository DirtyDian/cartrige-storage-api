import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartridgeModule } from './cartridge/cartridge.module';
import { DeliveryModule } from './delivery/delivery.module';
import { ShipmentModule } from './shipment/shipment.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CartridgeModule, DeliveryModule, ShipmentModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
