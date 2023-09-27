import { PrismaClient } from '@prisma/client';

type Land = {
  landSize: number;
  name: string;
  description: string;
  position: string;
  rotation: string;
  image: string;
  objectModelID: number;
  buildingModelID: number;
};

type Parcel = {
  parcelID: number;
  position: string;
  rotation: string;
  objectModelID: number;
};

interface ILandResponse {
  landList: Land[];
}

interface IParcelResponse {
  parcelList: Parcel[];
}

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const [parcelsResponse, landsResponse] = await Promise.all([
      fetch('https://landspanel.neoki.io/Parcels/ParcelListAPI'),
      fetch('https://landspanel.neoki.io/Lands/LandListAPI'),
    ]);

    const parcels: IParcelResponse = await parcelsResponse.json();
    const lands: ILandResponse = await landsResponse.json();

    await Promise.all([
      prisma.land.createMany({
        data: lands.landList.map((land, index) => {
          return {
            tokenId: (index + 1).toString(),
            size: land.landSize,
            name: land.name,
            description: land.description,
            position: land.position,
            rotation: land.rotation,
            image: land.image,
            objectModelId: land.objectModelID,
            buildingModelId: land.buildingModelID,
          };
        }),
      }),

      prisma.parcel.createMany({
        data: parcels.parcelList.map((parcel) => {
          return {
            id: parcel.parcelID,
            position: parcel.position,
            rotation: parcel.rotation,
            objectModelId: parcel.objectModelID,
          };
        }),
      }),
    ]);
  } catch (error) {
    throw new Error(error);
  }
}

seedDatabase()
  .then(async () => {
    await prisma.$connect();
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
