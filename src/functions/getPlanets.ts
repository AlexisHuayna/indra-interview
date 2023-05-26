import { NestFactory } from "@nestjs/core";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Handler } from "aws-lambda";
import { AppModule } from "../app.module";
import { Swapi } from "src/app/providers/swapi";

export const handler: Handler = async(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult>  => {
    const appContext = await NestFactory.createApplicationContext(AppModule);

    const swapiProvider = appContext.get(Swapi);
    const planets = await swapiProvider.getPlanets();

    return {
        statusCode: 200,
        body: JSON.stringify(planets)
    };
}