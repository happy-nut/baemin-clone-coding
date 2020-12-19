import { DomainViolationError, ValueObject } from '@ddd/core'
import { err, ok, Result } from 'neverthrow'

interface AddressProps {
  latitude: number,
  longitude: number
}

export class Address extends ValueObject<AddressProps> {
  private static readonly MAX_LATITUDE = 90.0
  private static readonly MIN_LATITUDE = -90.0
  private static readonly MAX_LONGITUDE = 180.0
  private static readonly MIN_LONGITUDE = -180.0

  static create (props: AddressProps): Result<Address, DomainViolationError> {
    if (
      props.latitude > this.MAX_LATITUDE ||
      props.latitude < this.MIN_LATITUDE ||
      props.longitude > this.MAX_LONGITUDE ||
      props.longitude < this.MIN_LONGITUDE
    ) {
      return err('Invalid address')
    }

    return ok(new Address({ ...props }))
  }

  get latitude (): number {
    return this.props.latitude
  }

  get longitude (): number {
    return this.props.longitude
  }
}
