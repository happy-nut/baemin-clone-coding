import { DomainViolationError, ValueObject } from '@ddd/core'
import { err, ok, Result } from 'neverthrow'
import _ from 'lodash'

interface RestaurantNameProps {
  value: string
}

export class RestaurantName extends ValueObject<RestaurantNameProps> {
  private static readonly MAX_LENGTH = 20

  static create (props: RestaurantNameProps): Result<RestaurantName, DomainViolationError> {
    if (_.isEmpty(props.value) || props.value.length > RestaurantName.MAX_LENGTH) {
      return err('Invalid restaurant name')
    }

    return ok(new RestaurantName({ ...props }))
  }

  get value (): string {
    return this.props.value
  }
}
