import { RestaurantName, RestaurantNameError } from './RestaurantName'

describe('RestaurantName', () => {
  it('returns InvalidRestaurantName err when name is empty', () => {
    const result = RestaurantName.create({ value: '' })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe(RestaurantNameError.InvalidRestaurantName)
  })

  it('returns InvalidRestaurantName err when length of the name is over 20', () => {
    const result = RestaurantName.create({ value: 'a'.repeat(21) })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe(RestaurantNameError.InvalidRestaurantName)
  })

  it('returns ok with menu name when name is valid', () => {
    const restaurantName = 'restaurant-name'

    const result = RestaurantName.create({ value: restaurantName })

    expect(result.isOk()).toBeTrue()
    expect(result._unsafeUnwrap().value).toBe(restaurantName)
  })
})

