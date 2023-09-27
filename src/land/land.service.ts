import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { IUpdateLand } from './dto/update-land.dto';

@Injectable()
export class LandService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const lands = await this.prisma.land.findMany();
    return lands;
  }

  async update({ where, data }: IUpdateLand) {
    await this.prisma.land.update({
      where,
      data,
    });
  }

  async findByTokenId(tokenId: string) {
    return await this.prisma.land.findUnique({
      where: {
        tokenId,
      },
    });
  }
}
