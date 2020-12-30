import { Controller, Get } from '@nestjs/common'
import { ListRestaurantCategoriesUseCase } from '../../application/list-restaurant-categories'
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger'
import { ListRestaurantCategoriesViewModel } from './ListRestaurantCategoriesViewModel'
import _ from 'lodash'

@Controller()
export class ListRestaurantCategoriesController {
  constructor (private readonly listRestaurantCategoriesUseCase: ListRestaurantCategoriesUseCase) {
  }

  @Get('list-restaurant-categories')
  @ApiOkResponse()
  @ApiResponse({ type: [ListRestaurantCategoriesViewModel] })
  async list (): Promise<ListRestaurantCategoriesViewModel[]> {
    const result = await this.listRestaurantCategoriesUseCase.execute()
    const categories = result._unsafeUnwrap()
    return _.map(categories, (category) => new ListRestaurantCategoriesViewModel({
      name: category.name
    }))
  }
}
