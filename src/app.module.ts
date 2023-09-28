import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { LandModule } from './land/land.module';
// import { ParcelModule } from './parcel/parcel.module';
// import { BuildingModule } from './building/building.module';

@Module({
  // imports: [LandModule, ParcelModule, BuildingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
