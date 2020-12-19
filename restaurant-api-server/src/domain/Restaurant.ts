import { AggregateRoot, DomainViolationError, UniqueId } from '@ddd/core'
import { err, ok, Result } from 'neverthrow'
import _ from 'lodash'
import { RestaurantName } from './RestaurantName'
import { RestaurantCategoryId } from './RestaurantCategory'
import { Menu } from './Menu'
import { Address } from './Address'

interface RestaurantProps {
  name: RestaurantName,
  categoryIds: Set<RestaurantCategoryId>,
  menus: Menu[],
  menuOverview?: string,
  address: Address
}

export class RestaurantId extends UniqueId {
}

export class Restaurant extends AggregateRoot<RestaurantProps> {
  static create (props: RestaurantProps, id: RestaurantId): Result<Restaurant, DomainViolationError> {
    const error = this.validate(props)
    if (!_.isNil(error)) {
      return err(error)
    }

    return ok(new Restaurant({ ...props }, id ?? new RestaurantId()))
  }

  static createNew (props: RestaurantProps): Result<Restaurant, DomainViolationError> {
    const error = this.validate(props)
    if (!_.isNil(error)) {
      return err(error)
    }

    return ok(new Restaurant({ ...props }, new RestaurantId()))
  }

  private static validate (props: RestaurantProps): DomainViolationError {
    if (_.isEmpty(props.menus)) {
      return 'Menus list must not be empty'
    }
  }

  get name (): RestaurantName {
    return this.props.name
  }

  get categories (): Set<RestaurantCategoryId> {
    return this.props.categoryIds
  }

  get menus (): Menu[] {
    return this.props.menus
  }

  get menuOverview (): string | undefined {
    return this.props.menuOverview
  }

  get address (): Address {
    return this.props.address
  }
}
