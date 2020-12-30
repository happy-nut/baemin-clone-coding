import { RestaurantCategory } from '../../../../domain/RestaurantCategory'
import { RestaurantCategoryEntity } from '../RestaurantCategoryEntity'
import { UniqueId } from '@ddd/core'

export class RestaurantCategoryEntityMapper {
  static fromDomain (restaurantCategory: RestaurantCategory): RestaurantCategoryEntity {
    const entity = new RestaurantCategoryEntity()
    entity.name = restaurantCategory.name
    entity.id = restaurantCategory.id.value
    return entity
  }

  static toDomain (restaurantCategoryEntity: RestaurantCategoryEntity): RestaurantCategory {
    return RestaurantCategory
      .create({ name: restaurantCategoryEntity.name }, new UniqueId(restaurantCategoryEntity.id))
      ._unsafeUnwrap()
  }
}
