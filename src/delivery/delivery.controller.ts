import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeliveryService, DeliveryToAdd } from './delivery.service';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  async getAll() {
    return await this.deliveryService.getAll();
  }

  @Post()
  async add(@Body() delivery: DeliveryToAdd) {
    return await this.deliveryService.add(delivery);
  }
}
