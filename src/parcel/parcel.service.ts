import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ParcelService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const parcels = await this.prisma.parcel.findMany();
    return parcels;
  }
}
