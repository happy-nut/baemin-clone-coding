import { Entity, UniqueId, ValueObject } from '../ddd'

interface MenuNameProps {
  value: string
}

export class MenuName extends ValueObject<MenuNameProps> {
  static create(props: MenuNameProps): MenuName {
    return new MenuName({ ...props })
  }
}

describe('MenuName', () => {
  it('creates name ')
})

interface MenuProps {
  name: MenuName
  ingredientsOverview?: string
  description?: string
  price: number
  pictureUrl?: string
  isRepresentativeMenu: boolean
  isSoldOut: boolean
  isForAdults: boolean // E.g. 주류
}

export class Menu extends Entity<MenuProps> {
  static create(props: MenuProps, id?: UniqueId): Menu {
    return new Menu({ ...props}, id ?? new UniqueId())
  }
}
