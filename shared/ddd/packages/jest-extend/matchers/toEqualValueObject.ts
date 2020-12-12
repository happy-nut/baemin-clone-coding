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
        message: () => `Received: ${JSON.stringify(received)} and` +
          ` expected: ${JSON.stringify(expected)} are not equal value object`,
        pass
      }
    }
  }
})
