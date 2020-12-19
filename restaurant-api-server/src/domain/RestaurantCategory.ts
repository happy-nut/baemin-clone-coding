import { AggregateRoot, DomainViolationError, UniqueId } from '@ddd/core'
import { ok, Result } from 'neverthrow'

interface RestaurantCategoryProps {
  // TODO: Consider to introduce localizedNameKey for i18n support. For now, support korean only.
  name: string
  // TODO: Add category icon path.
}

export class RestaurantCategoryId extends UniqueId {
}

export class RestaurantCategory extends AggregateRoot<RestaurantCategoryProps> {
  static create (
    props: RestaurantCategoryProps,
    id: RestaurantCategoryId
  ): Result<RestaurantCategory, DomainViolationError> {
    return ok(new RestaurantCategory({ ...props }, id))
  }

  static createNew (props: RestaurantCategoryProps): Result<RestaurantCategory, DomainViolationError> {
    return ok(new RestaurantCategory({ ...props }, new RestaurantCategoryId()))
  }

  get name (): string {
    return this.props.name
  }
}
