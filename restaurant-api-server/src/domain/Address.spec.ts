import { Address } from './Address'

describe('Address', () => {
  const VALID_LATITUDE = 37.532600
  const VALID_LONGITUDE = 127.024612

  it('returns err when given latitude is greater than max latitude', () => {
    const result = Address.create({ latitude: 90.1, longitude: VALID_LONGITUDE })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe('Invalid address')
  })

  it('returns err when given latitude is smaller than min latitude', () => {
    const result = Address.create({ latitude: -90.1, longitude: VALID_LONGITUDE })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe('Invalid address')
  })

  it('returns err when given longitude is greater than max longitude', () => {
    const result = Address.create({ latitude: VALID_LATITUDE, longitude: 180.1 })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe('Invalid address')
  })

  it('returns err when given longitude is smaller than min longitude', () => {
    const result = Address.create({ latitude: VALID_LATITUDE, longitude: -180.1 })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe('Invalid address')
  })

  it('returns ok with address when given longitude and longitude are valid', () => {
    const result = Address.create({ latitude: VALID_LATITUDE, longitude: VALID_LONGITUDE })

    expect(result.isOk()).toBeTrue()
    const address = result._unsafeUnwrap()
    expect(address.latitude).toBe(VALID_LATITUDE)
    expect(address.longitude).toBe(VALID_LONGITUDE)
  })
})
