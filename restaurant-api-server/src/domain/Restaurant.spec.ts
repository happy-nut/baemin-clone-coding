import { UniqueId } from '@ddd/core'
import { RestaurantName } from './RestaurantName'
import { RestaurantCategory } from './RestaurantCategory'
import { Menu } from './Menu'
import { Address } from './Address'
import { MenuName } from './MenuName'
import { Price } from './Price'
import { Restaurant, RestaurantError } from './Restaurant'

describe('Restaurant', () => {
  const RESTAURANT_NAME = RestaurantName.create({ value: 'restaurant-name' })._unsafeUnwrap()
  const RESTAURANT_CATEGORIES = [RestaurantCategory.AsianForeign, RestaurantCategory.Franchise]
  const MENUS = [
    Menu
      .create({
        name: MenuName.create({ value: 'menu-name-1 '})._unsafeUnwrap(),
        price: Price.create({ value: 5000 })._unsafeUnwrap(),
        isRepresentativeMenu: true,
        isSoldOut: false,
        isForAdults: false
      })
      ._unsafeUnwrap(),
    Menu
      .create({
        name: MenuName.create({ value: 'menu-name-2 '})._unsafeUnwrap(),
        price: Price.create({ value: 7000 })._unsafeUnwrap(),
        isRepresentativeMenu: false,
        isSoldOut: false,
        isForAdults: true
      })
      ._unsafeUnwrap()
  ]
  const ADDRESS = Address.create({ latitude: 40.0, longitude: 50.0 })._unsafeUnwrap()

  it('returns NoMenu err when given menus are empty', () => {
    const result = Restaurant.create(
      {
        name: RESTAURANT_NAME,
        categories: RESTAURANT_CATEGORIES,
        menus: [],
        address: ADDRESS
      }
    )

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe(RestaurantError.NoMenu)
  })

  it('returns ok when given props is valid', () => {
    const result = Restaurant.create(
      {
        name: RESTAURANT_NAME,
        categories: RESTAURANT_CATEGORIES,
        menus: MENUS,
        address: ADDRESS
      }
    )

    expect(result.isOk()).toBeTrue()
    const restaurant = result._unsafeUnwrap()
    expect(restaurant.name).toEqualValueObject(RESTAURANT_NAME)
    expect(restaurant.categories).toEqual(RESTAURANT_CATEGORIES)
    expect(restaurant.menus).toEqual(MENUS)
    expect(restaurant.address).toEqual(ADDRESS)
  })

  it('returns ok when ID and given props is valid', () => {
    const id = new UniqueId('restaurant-id')

    const result = Restaurant.create(
      {
        name: RESTAURANT_NAME,
        categories: RESTAURANT_CATEGORIES,
        menus: MENUS,
        address: ADDRESS
      },
      id
    )

    expect(result.isOk()).toBeTrue()
    const restaurant = result._unsafeUnwrap()
    expect(restaurant.name).toEqualValueObject(RESTAURANT_NAME)
    expect(restaurant.id.equals(id)).toBeTrue()
    expect(restaurant.categories).toEqual(RESTAURANT_CATEGORIES)
    expect(restaurant.menus).toEqual(MENUS)
    expect(restaurant.address).toEqual(ADDRESS)
  })
})
