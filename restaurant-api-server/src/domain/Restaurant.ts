import { AggregateRoot, UniqueId } from '@ddd/core'
import { err, ok, Result } from 'neverthrow'
import _ from 'lodash'
import { RestaurantName } from './RestaurantName'
import { RestaurantCategory } from './RestaurantCategory'
import { Menu } from './Menu'
import { Address } from './Address'

interface RestaurantProps {
  name: RestaurantName,
  categories: RestaurantCategory[],
  menus: Menu[],
  menuOverview?: string,
  address: Address
}

export enum RestaurantError {
  NoMenu
}

export class Restaurant extends AggregateRoot<RestaurantProps> {
  static create(props: RestaurantProps, id?: UniqueId): Result<Restaurant, RestaurantError> {
    if (_.isEmpty(props.menus)) {
      return err(RestaurantError.NoMenu)
    }

    return ok(new Restaurant({...props}, id ?? new UniqueId()))
  }

  get name(): RestaurantName {
    return this.props.name
  }

  get categories(): RestaurantCategory[] {
    return this.props.categories
  }

  get menus(): Menu[] {
    return this.props.menus
  }

  get menuOverview(): string | undefined {
    return this.props.menuOverview
  }

  get address(): Address {
    return this.props.address
  }
}
