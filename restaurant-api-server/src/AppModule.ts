import { Logger, Module } from '@nestjs/common'
import { HealthzController } from './presentation/healthz/healthzController'
import { DatabaseModule } from './modules/database'

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    HealthzController
  ],
  providers: [
    Logger
  ]
})
export class AppModule {}
