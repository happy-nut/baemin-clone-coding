import { RestaurantCategory, RestaurantCategoryId } from './RestaurantCategory'

describe('RestaurantCategory', () => {
  describe('create', () => {
    it('creates RestaurantCategory', () => {
      const id =  new RestaurantCategoryId('test-restaurant-category-id')
      const name = 'test-category-name'

      const result = RestaurantCategory.create({ name }, id)

      expect(result.isOk()).toBeTrue()
      const category = result._unsafeUnwrap()
      expect(category.id.equals(id)).toBeTrue()
      expect(category.name).toBe(name)
    })

    it('returns err when name is empty', () => {
      const id =  new RestaurantCategoryId('test-restaurant-category-id')
      const name = ''

      const result = RestaurantCategory.create({ name }, id)

      expect(result.isErr()).toBeTrue()
      const error = result._unsafeUnwrapErr()
      expect(error).toBe('Invalid category name')
    })

    it('returns err when name length is greater than 20', () => {
      const id =  new RestaurantCategoryId('test-restaurant-category-id')
      const name = 'A'.repeat(21)

      const result = RestaurantCategory.create({ name }, id)

      expect(result.isErr()).toBeTrue()
      const error = result._unsafeUnwrapErr()
      expect(error).toBe('Invalid category name')
    })
  })

  describe('createNew', () => {
    it('creates RestaurantCategory without ID', () => {
      const name = 'test-category-name'

      const result = RestaurantCategory.createNew({ name })

      expect(result.isOk()).toBeTrue()
      const category = result._unsafeUnwrap()
      expect(category.id.value).not.toBeEmpty()
      expect(category.name).toBe(name)
    })

    it('returns err when name is empty', () => {
      const name = ''

      const result = RestaurantCategory.createNew({ name })

      expect(result.isErr()).toBeTrue()
      const error = result._unsafeUnwrapErr()
      expect(error).toBe('Invalid category name')
    })

    it('returns err when name length is greater than 20', () => {
      const name = 'A'.repeat(21)

      const result = RestaurantCategory.createNew({ name })

      expect(result.isErr()).toBeTrue()
      const error = result._unsafeUnwrapErr()
      expect(error).toBe('Invalid category name')
    })
  })
})
