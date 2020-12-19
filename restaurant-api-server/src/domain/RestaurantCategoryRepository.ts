import { RestaurantCategory } from './RestaurantCategory'

export interface RestaurantCategoryRepository {
  findAll(): Promise<RestaurantCategory[]>
}
