import { DomainViolationError, ValueObject } from '@ddd/core'
import { err, ok, Result } from 'neverthrow'
import _ from 'lodash'

interface MenuNameProps {
  value: string
}

export class MenuName extends ValueObject<MenuNameProps> {
  private static readonly MAX_LENGTH = 20

  static create(props: MenuNameProps): Result<MenuName, DomainViolationError> {
    if (_.isEmpty(props.value) || props.value.length > MenuName.MAX_LENGTH) {
      return err('Invalid menu name')
    }

    return ok(new MenuName({ ...props }))
  }

  get value(): string {
    return this.props.value
  }
}
