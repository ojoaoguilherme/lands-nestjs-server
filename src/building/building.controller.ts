import { Controller, Get } from '@nestjs/common';
import { BuildingService } from './building.service';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  // @Post()
  // create(@Body() createBuildingDto: CreateBuildingDto) {
  //   return this.buildingService.create(createBuildingDto);
  // }

  @Get()
  findAll() {
    return this.buildingService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.buildingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateBuildingDto: UpdateBuildingDto,
  // ) {
  //   return this.buildingService.update(+id, updateBuildingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.buildingService.remove(+id);
  // }
}
