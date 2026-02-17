import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 启用 CORS（允许前端跨域访问）
  app.enableCors();

  // 配置 Swagger
  const config = new DocumentBuilder()
    .setTitle('PureLink API')
    .setDescription('PureLink 智能家居后端接口文档')
    .setVersion('1.0')
    .addTag('auth', '用户认证')
    .addTag('devices', '设备管理')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();