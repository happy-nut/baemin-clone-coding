import { MenuName } from './MenuName'
import { Price } from './Price'
import { DomainViolationError, Entity, UniqueId } from '@ddd/core'
import { ok, Result } from 'neverthrow'

interface MenuProps {
  name: MenuName
  ingredientsOverview?: string
  description?: string
  price: Price
  imageUrl?: string
  isRepresentativeMenu: boolean
  isSoldOut: boolean
  isForAdults: boolean // E.g. 주류
}

export class Menu extends Entity<MenuProps> {
  static create(props: MenuProps, id?: UniqueId): Result<Menu, DomainViolationError> {
    return ok(new Menu({ ...props }, id ?? new UniqueId()))
  }

  get name(): MenuName {
    return this.props.name
  }

  get ingredientsOverview(): string | undefined {
    return this.props.ingredientsOverview
  }

  get description(): string | undefined {
    return this.props.description
  }

  get price(): Price {
    return this.props.price
  }

  get imageUrl(): string | undefined {
    return this.props.imageUrl
  }

  get isRepresentativeMenu(): boolean {
    return this.props.isRepresentativeMenu
  }

  get isSoldOut(): boolean {
    return this.props.isSoldOut
  }

  get isForAdults(): boolean {
    return this.props.isForAdults
  }
}
