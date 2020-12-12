import { ValueObject } from './ValueObject'

interface TestValueObjectProps {
  a: string
  b: number
}

class TestValueObject extends ValueObject<TestValueObjectProps> {
  constructor(props: TestValueObjectProps) {
    super(props)
  }
}

describe('ValueObject', () => {
  const VALUE_OBJECT_PROPS_1 = { a: 'foo', b: 10 }
  const VALUE_OBJECT_PROPS_2 = { a: 'bar', b: 20 }

  it('creates a value object', () => {
    const valueObject = new TestValueObject(VALUE_OBJECT_PROPS_1)

    expect(valueObject).toBeDefined()
  })

  describe('equals', () => {
    it('returns true when given value object is itself', () => {
      const valueObject = new TestValueObject(VALUE_OBJECT_PROPS_1)

      expect(valueObject.equals(valueObject)).toBeTrue()
    })

    it('returns false when given value object is not equal', () => {
      const valueObject1 = new TestValueObject(VALUE_OBJECT_PROPS_1)
      const valueObject2 = new TestValueObject(VALUE_OBJECT_PROPS_2)

      expect(valueObject1.equals(valueObject2)).toBeFalse()
    })

    it('returns true when given value object is equal', () => {
      const valueObject1 = new TestValueObject(VALUE_OBJECT_PROPS_1)
      const valueObject2 = new TestValueObject(VALUE_OBJECT_PROPS_1)

      expect(valueObject1.equals(valueObject2)).toBeTrue()
    })
  })
})
