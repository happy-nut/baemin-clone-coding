import { AppModule } from './AppModule'
import { Test, TestingModule } from '@nestjs/testing'
import { HealthzController } from './presentation/healthz/healthzController'
import { DatabaseModule } from './modules/database'
import { ListRestaurantCategoriesController } from './presentation/list-restaurant-categories'

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

  it('gets HealthzController', () => {
    expect(uut.get(HealthzController)).toBeInstanceOf(HealthzController)
  })

  it('gets ListRestaurantCategoriesController', () => {
    expect(uut.get(ListRestaurantCategoriesController)).toBeInstanceOf(ListRestaurantCategoriesController)
  })
})
