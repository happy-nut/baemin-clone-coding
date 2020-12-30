import { RestaurantCategory } from './RestaurantCategory'

export const RESTAURANT_CATEGORY_REPOSITORY = Symbol('RESTAURANT_CATEGORY_REPOSITORY')

export interface RestaurantCategoryRepository {
  findAll(): Promise<RestaurantCategory[]>
}
