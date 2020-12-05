import { NestFactory } from '@nestjs/core'
import { AppModule } from './AppModule'
import { Logger } from '@nestjs/common'

const PORT = 8001

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
  const logger = app.get(Logger)
  logger.log(`Restaurant API server listening on port ${PORT}`)
}

bootstrap()
