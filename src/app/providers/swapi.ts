import { Injectable } from '@nestjs/common';
import { SwapiService } from '../services/swapi/swapi.service';
import { IPlaneta } from '../interfaces/planet.interface';
import { PlanetTransformer } from '../transformers/planet.transformer';

@Injectable()
export class Swapi {
    constructor(
        private readonly swapiServie: SwapiService,
        private readonly planetTransformer: PlanetTransformer,
    ) {}

    async getPlanets(): Promise<IPlaneta[]> {
        let planets = [];
        const data = await this.swapiServie.getPlanets();

        if(data) {
            planets = data.results.map((planet) => {
                return this.planetTransformer.transformToEsp(planet);
            });
        }

        return planets;
    }

    async getPlanet(planetId: number): Promise<IPlaneta> {
        let planet = null;
        const data = await this.swapiServie.getPlanet(planetId);

        if(data) {
            planet = this.planetTransformer.transformToEsp(data);
        }

        return planet;
    }
}
