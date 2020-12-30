import { UseCase } from '@ddd/core'
import { ListRestaurantCategoriesRequest as Request } from './ListRestaurantCategoriesRequest'
import {
  ListRestaurantCategoriesResponse as Response,
  RestaurantCategoryDto
} from './ListRestaurantCategoriesResponse'
import { RESTAURANT_CATEGORY_REPOSITORY, RestaurantCategoryRepository } from '../../domain/RestaurantCategoryRepository'
import { ok } from 'neverthrow'
import { RestaurantCategory } from '../../domain/RestaurantCategory'
import _ from 'lodash'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class ListRestaurantCategoriesUseCase implements UseCase<Request, Response> {
  constructor (
    @Inject(RESTAURANT_CATEGORY_REPOSITORY)
    private readonly restaurantCategoryRepository: RestaurantCategoryRepository) {
  }

  async execute (): Promise<Response> {
    const categories = await this.restaurantCategoryRepository.findAll()
    return ok(this.mapToDto(categories))
  }

  private mapToDto (categories: RestaurantCategory[]): RestaurantCategoryDto[] {
    return _.map(categories, (category) => ({
      name: category.name
    }))
  }
}
