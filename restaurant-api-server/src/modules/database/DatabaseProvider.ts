import { Provider } from '@nestjs/common'
import { Connection, createConnection } from 'typeorm'
import config from 'config'
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions'
import { RestaurantCategoryEntity } from '../../infra/typeorm/entities'

export const DATABASE_CONNECTION = Symbol('DATABASE_CONNECTION')

export const databaseProviders: Provider[] = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<Connection> => await createConnection({
      ...config.get<ConnectionOptions>('typeorm'),
      entities: [
        RestaurantCategoryEntity
      ]
    })
  }
]
