import { RestaurantCategory, RestaurantCategoryId } from './RestaurantCategory'

describe('RestaurantCategory', () => {
  describe('create', () => {
    it('creates RestaurantCategory', () => {
      const id =  new RestaurantCategoryId('test-restaurant-category-id')
      const name = 'test-restaurant-category'

      const result = RestaurantCategory.create({ name }, id)

      expect(result.isOk()).toBeTrue()
      const category = result._unsafeUnwrap()
      expect(category.id.equals(id)).toBeTrue()
      expect(category.name).toBe(name)
    })
  })

  describe('createNew', () => {
    it('creates RestaurantCategory without ID', () => {
      const name = 'test-restaurant-category'

      const result = RestaurantCategory.createNew({ name })

      expect(result.isOk()).toBeTrue()
      const category = result._unsafeUnwrap()
      expect(category.id.value).not.toBeEmpty()
      expect(category.name).toBe(name)
    })
  })
})
