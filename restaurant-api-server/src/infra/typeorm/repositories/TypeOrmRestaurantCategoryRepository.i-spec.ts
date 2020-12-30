import { RestaurantCategory } from '../../../domain/RestaurantCategory'
import { Connection } from 'typeorm'
import { Test, TestingModule } from '@nestjs/testing'
import { DatabaseModule } from '../../../modules/database'
import { DATABASE_CONNECTION } from '../../../modules/database/DatabaseProvider'
import { TypeOrmRestaurantCategoryRepository } from './TypeOrmRestaurantCategoryRepository'
import { TypeOrmTestHelper } from '../../../../test/typeorm'
import _ from 'lodash'

describe('TypeOrmRestaurantCategoryRepository', () => {
  let testingModule: TestingModule
  let typeOrmTestHelper: TypeOrmTestHelper
  let connection: Connection
  let uut: TypeOrmRestaurantCategoryRepository

  beforeEach(async () => {
    testingModule = await Test
      .createTestingModule({
        imports: [DatabaseModule],
        providers: [TypeOrmRestaurantCategoryRepository]
      })
      .compile()
    connection = testingModule.get(DATABASE_CONNECTION)
    uut = testingModule.get(TypeOrmRestaurantCategoryRepository)
    typeOrmTestHelper = new TypeOrmTestHelper(connection)
  })

  afterEach(async () => {
    await typeOrmTestHelper.tearDown()
  })

  it('returns empty list if there is no category', async () => {
    const result = await uut.findAll()

    expect(result).toBeEmpty()
  })

  it('saves category', async () => {
    const name = 'test-category-name'
    const category = RestaurantCategory.createNew({ name })._unsafeUnwrap()

    const result = await uut._save(category)

    expect(result.name).toBe(name)
    expect(result).toEqualEntity(category)
  })

  it('returns all categories', async () => {
    const name1 = 'test-category-name-1'
    const category1 = RestaurantCategory.createNew({ name: name1 })._unsafeUnwrap()
    await uut._save(category1)
    const name2 = 'test-category-name-2'
    const category2 = RestaurantCategory.createNew({ name: name2 })._unsafeUnwrap()
    await uut._save(category2)

    const results = await uut.findAll()

    expect(results.length).toBe(2)
    const sorted = _.sortBy(results, (result: RestaurantCategory) => result.name)
    expect(sorted[0]).toEqualEntity(category1)
    expect(sorted[0].name).toBe(name1)
    expect(sorted[1]).toEqualEntity(category2)
    expect(sorted[1].name).toBe(name2)
  })
})
