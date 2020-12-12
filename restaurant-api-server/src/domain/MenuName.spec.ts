import { MenuName, MenuNameError } from './MenuName'

describe('MenuName', () => {
  it('returns InvalidMenuName err when name is empty', () => {
    const result = MenuName.create({ value: '' })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe(MenuNameError.InvalidMenuName)
  })

  it('returns InvalidMenuName err when length of the name is over 20', () => {
    const result = MenuName.create({ value: 'a'.repeat(21) })

    expect(result.isErr()).toBeTrue()
    expect(result._unsafeUnwrapErr()).toBe(MenuNameError.InvalidMenuName)
  })

  it('returns ok with menu name when name is valid', () => {
    const menuName = 'valid menu name'

    const result = MenuName.create({ value: menuName })

    expect(result.isOk()).toBeTrue()
    expect(result._unsafeUnwrap().value).toBe(menuName)
  })
})

