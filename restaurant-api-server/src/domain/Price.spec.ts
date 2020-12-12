import { Price, PriceError } from './Price'

describe('Price', () => {
  it('returns InvalidPrice err when price is smaller than 0', () => {
    const result = Price.create({ value: -1 })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe(PriceError.InvalidPrice)
  })

  it('returns InvalidPrice err when price is not an integer', () => {
    const result = Price.create({ value: 0.5 })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe(PriceError.InvalidPrice)
  })

  it('returns ok with price when price is valid', () => {
    const price = 500

    const result = Price.create({ value: price })

    expect(result.isOk()).toBeTrue()
    expect(result._unsafeUnwrap().value).toBe(price)
  })
})
