import { IPlanet } from "./planet.interface";

export interface SwapiPlanetsResponse {
    count: number;
    next: string;
    previous: string;
    results: IPlanet[]
}
