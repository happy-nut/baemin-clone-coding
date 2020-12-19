import { DomainViolationError, ValueObject } from '@ddd/core'
import { err, ok, Result } from 'neverthrow'
import _ from 'lodash'

interface PriceProps {
  value: number
}

export class Price extends ValueObject<PriceProps> {
  private static readonly MIN_PRICE = 0

  static create (props: PriceProps): Result<Price, DomainViolationError> {
    if (props.value < Price.MIN_PRICE || !_.isInteger(props.value)) {
      return err('Invalid price')
    }

    return ok(new Price({ ...props }))
  }

  get value (): number {
    return this.props.value
  }
}
