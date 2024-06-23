import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  CartridgeService,
  CartrigeToAdd,
  CartrigeToUpdate,
} from './cartridge.service';

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

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CartrigeToUpdate,
  ) {
    return await this.cartridgeService.update(id, dto);
  }
}
