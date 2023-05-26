import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as AWS from 'aws-sdk';
import { IFan } from 'src/app/interfaces/fan.interface';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const dynamoDB = new AWS.DynamoDB.DocumentClient();


@Injectable()
export class FansService {
    private fanTableName: string;

    constructor() {
        this.fanTableName = process.env.FAN_TABLE_NAME;
    }

    async createFan(fan: IFan){
        fan.id = uuidv4();

        try {
          await dynamoDB.put({
            TableName: this.fanTableName,
            Item: fan
          }).promise();
        } catch (err) {
          throw new Error("Cant create new Fan");
        }

        return fan;
    }

    async getFans() {
        let fans = [];

        try {
            const data = await dynamoDB.scan({
                TableName: this.fanTableName,
            }).promise();
            console.log(data);
            fans = data.Items ?? [];
        } catch(err) {
            console.log(err);
            throw new Error("Cant get Fans");
        }

        return fans;
    }
}
