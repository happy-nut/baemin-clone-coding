import { Inject, Module, OnModuleDestroy } from '@nestjs/common'
import { Connection } from 'typeorm'

import { DATABASE_CONNECTION, databaseProviders } from './DatabaseProvider'

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule implements OnModuleDestroy {
  constructor (@Inject(DATABASE_CONNECTION) private readonly connection: Connection) {
  }

  async onModuleDestroy (): Promise<void> {
    await this.connection.close()
  }
}
