import _ from 'lodash'

interface ValueObjectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

/**
 * @class ValueObject
 * @desc Value objects have no identifier. They are attributes of Entities.
 * Value objects are compared by their structural equality.
 * Value objects hold invariant rules for business logic.
 */
export class ValueObject<T extends ValueObjectProps> {
  private readonly props: T

  protected constructor(props: T) {
    this.props = { ...props }
    Object.freeze(this)
  }

  public equals (valueObject: ValueObject<T>): boolean {
    return _.isEqual(this.props, valueObject.props)
  }
}
