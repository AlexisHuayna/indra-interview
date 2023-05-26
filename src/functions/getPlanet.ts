import { NestFactory } from "@nestjs/core";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Handler } from "aws-lambda";
import { AppModule } from "../app.module";
import { Swapi } from "src/app/providers/swapi";

export const handler: Handler = async(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult>  => {
    const appContext = await NestFactory.createApplicationContext(AppModule);

    console.log(JSON.stringify(event));
    const planetId = event.path['id'];
    console.log(planetId);

    const swapiProvider = appContext.get(Swapi);
    const planets = await swapiProvider.getPlanet(planetId);

    return {
        statusCode: 200,
        body: JSON.stringify(planets)
    };
}