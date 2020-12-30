import { RestaurantCategory, RestaurantCategoryId } from '../../../../domain/RestaurantCategory'
import { RestaurantCategoryEntity } from '../RestaurantCategoryEntity'
import { RestaurantCategoryEntityMapper } from './RestaurantCategoryEntityMapper'

describe('RestaurantCategoryEntityMapper', () => {
  describe('.fromDomain', () => {
    it('maps to RestaurantCategoryEntity from RestaurantCategory', () => {
      const name = 'test-category-name'
      const id = 'test-category-id'
      const category = RestaurantCategory.create({ name }, new RestaurantCategoryId(id))._unsafeUnwrap()

      const result = RestaurantCategoryEntityMapper.fromDomain(category)

      expect(result.id).toBe(id)
      expect(result.name).toBe(name)
    })
  })

  describe('.toDomain', () => {
    it('maps to RestaurantCategory from RestaurantCategoryEntity', () => {
      const name = 'test-category-name'
      const id = 'test-category-id'
      const categoryEntity = new RestaurantCategoryEntity()
      categoryEntity.name = name
      categoryEntity.id = id

      const result = RestaurantCategoryEntityMapper.toDomain(categoryEntity)

      expect(result.id.value).toBe(id)
      expect(result.name).toBe(name)
    })
  })
})


