import { MenuName } from './MenuName'

describe('MenuName', () => {
  it('returns err when name is empty', () => {
    const result = MenuName.create({ value: '' })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe('Invalid menu name')
  })

  it('returns err when length of the name is over 20', () => {
    const result = MenuName.create({ value: 'a'.repeat(21) })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe('Invalid menu name')
  })

  it('returns ok with menu name when name is valid', () => {
    const menuName = 'valid-menu-name'

    const result = MenuName.create({ value: menuName })

    expect(result.isOk()).toBeTrue()
    expect(result._unsafeUnwrap().value).toBe(menuName)
  })
})

