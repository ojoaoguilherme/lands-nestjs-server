import { Prisma } from '@prisma/client';

export interface IUpdateLand {
  where: Prisma.LandWhereUniqueInput;
  data: Prisma.LandUpdateInput;
}
