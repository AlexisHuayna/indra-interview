import { Injectable } from '@nestjs/common';
import { IPlanet, IPlaneta } from "../interfaces/planet.interface";

@Injectable()
export class PlanetTransformer {
    transformToEsp(planet: IPlanet): IPlaneta {
        return {
            diametro: planet.diameter,
            clima: planet.climate,
            agua_superficial: planet.surface_water,
            nombre: planet.name,
            creado: planet.created,
            url: planet.url,
            periodo_de_rotacion: planet.rotation_period,
            editado: planet.edited,
            terreno: planet.terrain,
            gravedad: planet.gravity,
            periodo_orbital: planet.orbital_period,
            poblacion: planet.population,
            peliculas: planet.films,
            residentes: planet.residents
        }
    }
}