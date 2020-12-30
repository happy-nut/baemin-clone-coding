import { ValueObject } from '@ddd/core'

export {}

expect.extend({
  toEqualValueObject (received, expected) {
    if (!(received instanceof ValueObject) || !(expected instanceof ValueObject)) {
      return {
        message: () => `Received: ${received} or expected: ${expected} is not value object`,
        pass: false
      }
    }

    const pass = received.equals(expected)
    if (pass) {
      return {
        message: () => 'Is equal value objects',
        pass
      }
    } else {
      return {
        message: () => `Received:\n${JSON.stringify(received, null, 2)}\nand` +
          ` expected:\n${JSON.stringify(expected, null, 2)}\nare not equal value object`,
        pass
      }
    }
  }
})
