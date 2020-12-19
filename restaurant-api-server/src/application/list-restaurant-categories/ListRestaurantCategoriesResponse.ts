import { Result } from 'neverthrow'

export interface RestaurantCategoryDto {
  name: string
}

export type ListRestaurantCategoriesResponseOk = RestaurantCategoryDto[]

export type ListRestaurantCategoriesResponse = Result<ListRestaurantCategoriesResponseOk, void>
