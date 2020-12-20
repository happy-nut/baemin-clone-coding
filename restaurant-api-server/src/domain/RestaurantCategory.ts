import { AggregateRoot, DomainViolationError, UniqueId } from '@ddd/core'
import { err, ok, Result } from 'neverthrow'
import _ from 'lodash'

interface RestaurantCategoryProps {
  // TODO: Consider to introduce localizedNameKey for i18n support. For now, support korean only.
  name: string
  // TODO: Add category icon path.
}

export class RestaurantCategoryId extends UniqueId {
}

export class RestaurantCategory extends AggregateRoot<RestaurantCategoryProps> {
  private static readonly MAX_NAME_LENGTH = 20

  static create (
    props: RestaurantCategoryProps,
    id: RestaurantCategoryId
  ): Result<RestaurantCategory, DomainViolationError> {
    const error = this.validate(props)
    if (!_.isNil(error)) {
      return err(error)
    }

    return ok(new RestaurantCategory({ ...props }, id))
  }

  static createNew (props: RestaurantCategoryProps): Result<RestaurantCategory, DomainViolationError> {
    const error = this.validate(props)
    if (!_.isNil(error)) {
      return err(error)
    }

    return ok(new RestaurantCategory({ ...props }, new RestaurantCategoryId()))
  }

  private static validate (props: RestaurantCategoryProps): DomainViolationError {
    if (_.isEmpty(props.name) || props.name.length > this.MAX_NAME_LENGTH) {
      return 'Invalid category name'
    }
  }

  get name (): string {
    return this.props.name
  }
}
