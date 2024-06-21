import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShipmentService, ShipmentToAdd } from './shipment.service';

@Controller('shipments')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Get()
  async getAll() {
    return await this.shipmentService.getAll();
  }

  @Post()
  async add(@Body() shipment: ShipmentToAdd) {
    return await this.shipmentService.add(shipment);
  }
}
