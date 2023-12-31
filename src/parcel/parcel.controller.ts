import { Controller, Get, Res, HttpStatus } from '@nestjs/common';

import { ParcelService } from './parcel.service';
import { Response } from 'express';

@Controller('parcels')
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Get()
  async findAll(@Res() res: Response) {
    try {
      console.log('parcels ');
      const parcels = await this.parcelService.findAll();
      res.status(HttpStatus.OK).json({ parcels });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }
}
