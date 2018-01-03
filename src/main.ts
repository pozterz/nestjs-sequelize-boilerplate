import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as bodyParser from 'body-parser'

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(3000);
	app.use(bodyParser.json({ limit: '50MB' }));
}
bootstrap();
