import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DeliveryService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAll() {
    return await this.databaseService.delivery.findMany();
  }

  async add(delivery: DeliveryToAdd) {
    return await this.databaseService.delivery.create({
      data: delivery,
    });
  }
}

export class DeliveryToAdd {
  date: Date;
  available: number;
}
