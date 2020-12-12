import { UniqueId } from '@ddd/core'
import { MenuName } from './MenuName'
import { Price } from './Price'
import { Menu } from './Menu'

describe('Menu', () => {
  const MENU_NAME = MenuName.create({ value: 'valid-menu-name' })._unsafeUnwrap()
  const INGREDIENTS_OVERVIEW = 'ingredientsOverview'
  const DESCRIPTION = 'description'
  const PRICE = Price.create({ value: 500 })._unsafeUnwrap()
  const IMAGE_URL = 'imageUrl'
  const IS_REPRESENTATIVE_MENU = false
  const IS_SOLD_OUT = false
  const IS_FOR_ADULTS = false

  it('returns ok when given props is valid', () => {
    const result = Menu.create({
      name: MENU_NAME,
      ingredientsOverview: INGREDIENTS_OVERVIEW,
      description: DESCRIPTION,
      price: PRICE,
      imageUrl: IMAGE_URL,
      isRepresentativeMenu: IS_REPRESENTATIVE_MENU,
      isSoldOut: IS_SOLD_OUT,
      isForAdults: IS_FOR_ADULTS
    })

    expect(result.isOk()).toBeTrue()
    const menu = result._unsafeUnwrap()
    expect(menu.name).toEqualValueObject(MENU_NAME)
    expect(menu.ingredientsOverview).toBe(INGREDIENTS_OVERVIEW)
    expect(menu.description).toBe(DESCRIPTION)
    expect(menu.price).toEqualValueObject(PRICE)
    expect(menu.imageUrl).toBe(IMAGE_URL)
    expect(menu.isRepresentativeMenu).toBe(IS_REPRESENTATIVE_MENU)
    expect(menu.isSoldOut).toBe(IS_SOLD_OUT)
    expect(menu.isForAdults).toBe(IS_FOR_ADULTS)
  })

  it('returns ok when ID and valid props are given', () => {
    const id = 'menu-id'

    const result = Menu.create(
      {
        name: MENU_NAME,
        ingredientsOverview: INGREDIENTS_OVERVIEW,
        description: DESCRIPTION,
        price: PRICE,
        imageUrl: IMAGE_URL,
        isRepresentativeMenu: IS_REPRESENTATIVE_MENU,
        isSoldOut: IS_SOLD_OUT,
        isForAdults: IS_FOR_ADULTS
      },
      new UniqueId(id)
    )

    expect(result.isOk()).toBeTrue()
    const menu = result._unsafeUnwrap()
    expect(menu.name).toEqualValueObject(MENU_NAME)
    expect(menu.ingredientsOverview).toBe(INGREDIENTS_OVERVIEW)
    expect(menu.description).toBe(DESCRIPTION)
    expect(menu.price).toEqualValueObject(PRICE)
    expect(menu.imageUrl).toBe(IMAGE_URL)
    expect(menu.isRepresentativeMenu).toBe(IS_REPRESENTATIVE_MENU)
    expect(menu.isSoldOut).toBe(IS_SOLD_OUT)
    expect(menu.isForAdults).toBe(IS_FOR_ADULTS)
    expect(menu.id.value).toBe(id)
  })
})
