import { Controller, Get, Res, HttpStatus, Put, Body } from '@nestjs/common';
import { Response } from 'express';
import { LandService } from './land.service';
import { z } from 'zod';

@Controller('lands')
export class LandController {
  constructor(private readonly landService: LandService) {}

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const lands = await this.landService.findAll();
      res.status(HttpStatus.OK).json({ lands });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Put()
  async updateLand(@Body() bodyRequest: any, @Res() res: Response) {
    try {
      console.log('Hit update land controller');
      const bodySchema = z.object({
        tokenId: z.coerce.string().nonempty(),
        name: z.optional(z.string().max(50, 'Max length for LAND name is 50 ')),
        description: z.string().optional(),
        buildingModelId: z.coerce.number(),
      });

      const { tokenId, name, description, buildingModelId } =
        bodySchema.parse(bodyRequest);

      console.log('Land update data', {
        tokenId,
        name,
        description,
        buildingModelId,
      });
      res
        .status(HttpStatus.OK)
        .json({ tokenId, name, description, buildingModelId });

      // check for existent building model ID

      // await this.landService.update({
      //   data: {
      //     name,
      //     description,
      //     buildingModelId,
      //   },
      //   where: {
      //     tokenId,
      //   },
      // });
      // ola mundo
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }
}
