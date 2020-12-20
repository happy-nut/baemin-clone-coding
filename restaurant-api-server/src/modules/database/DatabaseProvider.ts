import path from 'path'

import { Provider } from '@nestjs/common'
import { Connection, createConnection } from 'typeorm'
import config from 'config'
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions'

export const DATABASE_CONNECTION = Symbol('DATABASE_CONNECTION')

export const databaseProviders: Provider[] = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<Connection> => await createConnection({
      ...config.get<ConnectionOptions>('typeorm'),
      entities: [
        path.join(__dirname, '../../infra/typeorm/entities/**/*Entity.ts')
      ]
    })
  }
]
