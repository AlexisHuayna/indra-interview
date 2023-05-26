import { Injectable } from '@nestjs/common';
import axios from "axios";
import { IPlanet } from 'src/app/interfaces/planet.interface';
import { SwapiPlanetsResponse } from 'src/app/interfaces/swapi.interface';

@Injectable()
export class SwapiService {
    private host;

    constructor() {
        this.host = process.env.SWAPI_HOST;
    }

    async getPlanets(): Promise<SwapiPlanetsResponse> {
        const url = `${this.host}/api/planets`;

        let resp: any;

        try {
            await axios.get(url).then(res => {
                resp = res;
            });
        } catch (error) {
            resp = {
                status: 500,
                error: error
            };
        }

        return resp.data ? resp.data as SwapiPlanetsResponse : null;
    }

    async getPlanet(planetId: number): Promise<IPlanet> {
        const url = `${this.host}/api/planets/${planetId}`;

        let resp: any;

        try {
            await axios.get(url).then(res => {
                resp = res;
            });
        } catch (error) {
            resp = {
                status: 500,
                error: error
            };
        }

        return resp.data ? resp.data as IPlanet : null;
    }
}
