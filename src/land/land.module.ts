import { Module } from '@nestjs/common';
import { LandService } from './land.service';
import { LandController } from './land.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LandController],
  providers: [LandService, PrismaService],
})
export class LandModule {}
