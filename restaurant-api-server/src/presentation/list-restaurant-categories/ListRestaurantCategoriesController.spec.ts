import { HttpStatus, INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import request from 'supertest'
import {
  ListRestaurantCategoriesResponseOk,
  ListRestaurantCategoriesUseCase
} from '../../application/list-restaurant-categories'
import { mock, MockProxy } from 'jest-mock-extended'
import { ok } from 'neverthrow'
import { ListRestaurantCategoriesViewModel } from './ListRestaurantCategoriesViewModel'
import { ListRestaurantCategoriesController } from './ListRestaurantCategoriesController'

describe('ListRestaurantCategoriesController', () => {
  let testingModule: TestingModule
  let app: INestApplication
  let listRestaurantCategoriesUseCase: MockProxy<ListRestaurantCategoriesUseCase>
  let uut: unknown

  function givenUseCaseResolvedOk (response: ListRestaurantCategoriesResponseOk) {
    listRestaurantCategoriesUseCase.execute.mockResolvedValueOnce(ok(response))
  }

  beforeEach(async () => {
    listRestaurantCategoriesUseCase = mock<ListRestaurantCategoriesUseCase>()
    testingModule = await Test
      .createTestingModule({
        controllers: [
          ListRestaurantCategoriesController
        ],
        providers: [
          {
            provide: ListRestaurantCategoriesUseCase,
            useValue: listRestaurantCategoriesUseCase
          }
        ]
      })
      .compile()
    app = await testingModule
      .createNestApplication()
      .init()
    uut = app.getHttpServer()
  })

  afterEach(async () => {
    await app.close()
    await testingModule.close()
  })

  it('responds 200 OK with empty list when given use case resolves empty list', async () => {
    givenUseCaseResolvedOk([])

    const response = await request(uut)
      .get('/list-restaurant-categories')

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.body).toEqual([])
  })

  it('returns 200 OK with restaurant category list when given use case resolves restaurant category list', async () => {
    givenUseCaseResolvedOk([
      { name: 'test-category-name-1' },
      { name: 'test-category-name-2' }
    ])

    const response = await request(uut)
      .get('/list-restaurant-categories')

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.body).toEqual([
      new ListRestaurantCategoriesViewModel({ name: 'test-category-name-1' }),
      new ListRestaurantCategoriesViewModel({ name: 'test-category-name-2' })
    ])
  })
})
