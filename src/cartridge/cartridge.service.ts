import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CartridgeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAll() {
    return await this.databaseService.cartridge.findMany();
  }

  async add(cartridge: CartrigeToAdd) {
    return await this.databaseService.cartridge.create({
      data: cartridge,
    });
  }

  async update(id: number, cartridge: CartrigeToUpdate) {
    return await this.databaseService.cartridge.update({
      where: {
        id,
      },
      data: cartridge,
    });
  }
}

export class CartrigeToAdd {
  model: string;
  compability: string;
  available: number;
}

export class CartrigeToUpdate {
  model?: string;
  compability?: string;
  available?: number;
}
