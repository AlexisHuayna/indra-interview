import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwapiService } from './app/services/swapi/swapi.service';
import { FansService } from './app/services/fans/fans.service';
import { Swapi } from './app/providers/swapi';
import { Fans } from './app/providers/fans';
import { PlanetTransformer } from './app/transformers/planet.transformer';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SwapiService, FansService, Swapi, Fans, PlanetTransformer],
})
export class AppModule {}
