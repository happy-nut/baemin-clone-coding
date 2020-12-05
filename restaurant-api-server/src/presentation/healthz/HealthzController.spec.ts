import { Test, TestingModule } from '@nestjs/testing'
import { HealthzController } from './healthzController'
import request from 'supertest'
import { HttpStatus, INestApplication } from '@nestjs/common'

describe('HealthzController', () => {
  let app: INestApplication
  let uut: unknown

  beforeEach(async () => {
    const testingModule: TestingModule = await Test
      .createTestingModule({
        controllers: [HealthzController]
      })
      .compile()
    app = await testingModule
      .createNestApplication()
      .init()
    uut = app.getHttpServer()
  })

  afterEach(async () => {
    await app.close()
  })

  it('returns nothing', async () => {
    const response = await request(uut)
      .get('/healthz')

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.body).toEqual({})
  })
})
