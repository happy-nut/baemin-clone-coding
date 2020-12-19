import path from 'path'

import { Provider } from '@nestjs/common'
import { Connection, createConnection } from 'typeorm'

export const DATABASE_CONNECTION = Symbol('DATABASE_CONNECTION')

export const databaseProviders: Provider[] = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<Connection> => await createConnection({
      // TODO: Provide values below via config.
      name: 'test',
      type: 'mysql',
      port: 3306,
      username: 'restaurant_api_tester',
      password: 'Mm6SkgR7wFl42s$I',
      database: 'restaurant_api_test',
      synchronize: true,
      dropSchema: true,
      entities: [
        path.join(__dirname, '../../infra/typeorm/entities/**/*Entity.ts')
      ]
    })
  }
]
