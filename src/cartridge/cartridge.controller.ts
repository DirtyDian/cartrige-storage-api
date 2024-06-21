import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartridgeService, CartrigeToAdd } from './cartridge.service';

@Controller('cartridges')
export class CartridgeController {
  constructor(private cartridgeService: CartridgeService) {}

  @Get()
  async getAll() {
    return await this.cartridgeService.getAll();
  }

  @Post()
  async create(@Body() cartridge: CartrigeToAdd) {
    return await this.cartridgeService.add(cartridge);
  }
}
