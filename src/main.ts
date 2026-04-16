import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

class APIDocument {
  static setup(app: INestApplication) {
    const options = new DocumentBuilder()
      .setTitle('Ticket System API')
      .setDescription('This application exposes the backend APIs for the Ticketing System')
      .build();
    const document = SwaggerModule.createDocument(app, options, {
      ignoreGlobalPrefix: true,
    });

    SwaggerModule.setup('API', app, document);
  }
}

let app: INestApplication;

async function createApp() {
  if (!app) {
    app = await NestFactory.create(AppModule, { cors: true });

    APIDocument.setup(app);

    await app.init();
  }
  return app;
}

export default async function handler(req, res) {
  try {
    const app = await createApp();
    const server = app.getHttpAdapter().getInstance();
    return server(req, res);
  } catch (err) {
    console.error('🔥 RUNTIME ERROR:', err);
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
}
