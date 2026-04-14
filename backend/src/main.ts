import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para o frontend React conseguir se comunicar
  app.enableCors();

  // Habilita validação automática dos DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Configuração do Swagger (documentação da API)
  const config = new DocumentBuilder()
    .setTitle('Nubank - API de Cadastro')
    .setDescription('API para cadastro de clientes Nubank')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('🟣 Backend Nubank rodando em http://localhost:3000');
  console.log('📄 Documentação Swagger em http://localhost:3000/api');
}
bootstrap();
