import { NestFactory } from '@nestjs/core'
import { AppModule } from './AppModule'
import { INestApplication, Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const PORT = 8001
const SERVER_NAME = 'Restaurant API sever'

function setupDocument (app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle(SERVER_NAME)
    .setDescription('API for restaurant serving')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
}

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  setupDocument(app)

  await app.listen(PORT)

  const logger = app.get(Logger)
  logger.log(`${SERVER_NAME} listening on port ${PORT}`)
}

bootstrap()
