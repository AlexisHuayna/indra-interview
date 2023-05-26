import { Injectable } from '@nestjs/common';
import { FansService } from '../services/fans/fans.service';
import { IFan } from '../interfaces/fan.interface';

@Injectable()
export class Fans {
    constructor(private readonly fanService: FansService){}

    async createFan(fan: any) {
        const newFan = await this.fanService.createFan(fan);

        return newFan;
    }

    async getFans(){
        const fans = await this.fanService.getFans();

        return fans;
    }
}
