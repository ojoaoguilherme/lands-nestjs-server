import { Module } from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { ParcelController } from './parcel.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ParcelController],
  providers: [ParcelService, PrismaService],
})
export class ParcelModule {}
