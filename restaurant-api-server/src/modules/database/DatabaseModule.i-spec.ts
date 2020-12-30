import { Test, TestingModule } from '@nestjs/testing'
import { DatabaseModule } from './DatabaseModule'
import { DATABASE_CONNECTION } from './DatabaseProvider'
import { Connection } from 'typeorm'

describe('DatabaseModule', () => {
  let uut: TestingModule

  beforeEach(async () => {
    uut = await Test
      .createTestingModule({
        imports: [DatabaseModule]
      })
      .compile()
  })

  describe('providers', () => {
    afterEach(async () => {
      await uut.close()
    })

    it('resolves DATABASE_CONNECTION', async () => {
      expect(await uut.resolve(DATABASE_CONNECTION)).toBeInstanceOf(Connection)
    })
  })

  describe('.onModuleDestroy', () => {
    let connectionSpy: jest.SpyInstance

    beforeEach(async () => {
      const connection = await uut.resolve<Connection>(DATABASE_CONNECTION)
      connectionSpy = jest.spyOn(connection, 'close')
    })

    it('closes database connection', async () => {
      await uut.close()

      expect(connectionSpy).toHaveBeenCalled()
    })
  })
})
