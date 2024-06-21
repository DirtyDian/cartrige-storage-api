import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ShipmentService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAll() {
    return await this.databaseService.shipment.findMany();
  }

  async add(shipment: ShipmentToAdd) {
    return await this.databaseService.shipment.create({
      data: shipment,
    });
  }
}

export class ShipmentToAdd {
  date: Date;
  available: number;
}
