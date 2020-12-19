import { mock, MockProxy } from 'jest-mock-extended'
import { RestaurantCategoryRepository } from '../../domain/RestaurantCategoryRepository'
import { RestaurantCategory } from '../../domain/RestaurantCategory'
import { ListRestaurantCategoriesUseCase } from './ListRestaurantCategoriesUseCase'

describe('ListRestaurantCategoriesUseCase', () => {
  const RESTAURANT_CATEGORIES = [
    RestaurantCategory
      .createNew({ name: 'category-1' })
      ._unsafeUnwrap(),
    RestaurantCategory
      .createNew({ name: 'category-2' })
      ._unsafeUnwrap()
  ]
  let restaurantCategoryRepository: MockProxy<RestaurantCategoryRepository>
  let uut: ListRestaurantCategoriesUseCase

  function givenRepositoryReturnsEmptyListOnFindAll (): void {
    restaurantCategoryRepository.findAll.mockResolvedValueOnce([])
  }

  function givenRepositoryReturnsRestaurantCategoriesOnFindAll (categories: RestaurantCategory[]): void {
    restaurantCategoryRepository.findAll.mockResolvedValueOnce(categories)
  }

  function expectGivenRepositoryCalledFindAll () {
    expect(restaurantCategoryRepository.findAll).toHaveBeenCalled()
  }

  beforeEach(() => {
    restaurantCategoryRepository = mock()
    uut = new ListRestaurantCategoriesUseCase(restaurantCategoryRepository)
  })

  it('returns ok with empty list when there is no restaurant category', async () => {
    givenRepositoryReturnsEmptyListOnFindAll()

    const responseResult = await uut.execute()

    expect(responseResult.isOk()).toBeTrue()
    expectGivenRepositoryCalledFindAll()
    expect(responseResult._unsafeUnwrap()).toBeEmpty()
  })

  it('returns ok with restaurant categories', async () => {
    givenRepositoryReturnsRestaurantCategoriesOnFindAll(RESTAURANT_CATEGORIES)

    const responseResult = await uut.execute()

    expect(responseResult.isOk()).toBeTrue()
    expectGivenRepositoryCalledFindAll()
    const expected = [
      {
        name: 'category-1'
      },
      {
        name: 'category-2'
      }
    ]
    expect(responseResult._unsafeUnwrap()).toEqual(expected)
  })
})
