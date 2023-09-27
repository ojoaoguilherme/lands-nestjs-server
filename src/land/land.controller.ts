import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Put,
  Body,
  Param,
  HttpException,
} from '@nestjs/common';
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
      const bodySchema = z.object({
        tokenId: z.coerce.string().nonempty(),
        name: z.optional(z.string().max(50, 'Max length for LAND name is 50 ')),
        description: z.string().optional(),
        buildingModelId: z.coerce.number(),
      });

      const { tokenId, name, description, buildingModelId } =
        bodySchema.parse(bodyRequest);

      //TODO check for existent building model ID
      //[ ] throw if building model ID doesnt exist
      //[ ] update land
      await this.landService.update({
        data: {
          name,
          description,
          buildingModelId,
        },
        where: {
          tokenId,
        },
      });
      res
        .status(HttpStatus.OK)
        .json({ tokenId, name, description, buildingModelId });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }
  @Get(':tokenId')
  async getLandByTokenId(
    @Param('tokenId') tokenId: string,
    @Res() res: Response,
  ) {
    try {
      const land = await this.landService.findByTokenId(tokenId);
      if (!land) {
        throw new HttpException(
          { message: 'Land not fount' },
          HttpStatus.NOT_FOUND,
        );
      }
      res.status(HttpStatus.OK).json({ land });
    } catch (error) {
      console.log(error);
    }
  }
}
