import { Injectable } from '@nestjs/common';

@Injectable()
export class BuildingService {
  create() {
    return 'This action adds a new building';
  }

  findAll() {
    return `This action returns all building`;
  }

  findOne(id: number) {
    return `This action returns a #${id} building`;
  }

  update(id: number) {
    return `This action updates a #${id} building`;
  }

  remove(id: number) {
    return `This action removes a #${id} building`;
  }
}
