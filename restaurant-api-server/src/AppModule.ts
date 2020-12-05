import { Logger, Module } from '@nestjs/common'
import { HealthzController } from './presentation/healthz/healthzController'

@Module({
  controllers: [
    HealthzController
  ],
  providers: [
    Logger
  ]
})
export class AppModule {}
