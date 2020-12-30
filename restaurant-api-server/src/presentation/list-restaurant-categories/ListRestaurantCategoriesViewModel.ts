import { ApiProperty } from '@nestjs/swagger'

export interface ListRestaurantCategoriesViewModelProps {
  name: string
}

export class ListRestaurantCategoriesViewModel implements ListRestaurantCategoriesViewModelProps {
  @ApiProperty()
  name: string

  constructor (props: ListRestaurantCategoriesViewModelProps) {
    this.name = props.name
  }
}
