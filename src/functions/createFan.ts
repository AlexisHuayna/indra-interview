import { NestFactory } from "@nestjs/core";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Handler } from "aws-lambda";
import { AppModule } from "../app.module";
import { Fans } from "src/app/providers/fans";

export const handler: Handler = async(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult>  => {
    const appContext = await NestFactory.createApplicationContext(AppModule);

    const body = event.body;

    const fansProvider = appContext.get(Fans);
    const fan = await fansProvider.createFan(body);

    return {
        statusCode: 200,
        body: JSON.stringify(fan)
    };
}