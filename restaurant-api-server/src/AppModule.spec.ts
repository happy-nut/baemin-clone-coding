import { AppModule } from './AppModule'
import { Test, TestingModule } from '@nestjs/testing'
import { HealthzController } from './presentation/healthz/healthzController'
import { DatabaseModule } from './modules/database'

describe('AppModule', () => {
  let uut: TestingModule

  beforeEach(async () => {
    uut = await Test
      .createTestingModule({
        imports: [AppModule]
      })
      .compile()
  })

  afterEach(async () => {
    await uut.close()
  })

  describe('DatabaseModule', () => {
    it('gets database module', async () => {
      expect(uut.get(DatabaseModule)).toBeInstanceOf(DatabaseModule)
    })
  })

  describe('Controllers', () => {
    it('gets HealthzController', () => {
      expect(uut.get(HealthzController)).toBeInstanceOf(HealthzController)
    })
  })
})
