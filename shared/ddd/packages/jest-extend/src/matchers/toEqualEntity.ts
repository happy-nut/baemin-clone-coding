import { Entity } from '@ddd/core'

export {}

expect.extend({
  toEqualEntity (received, expected) {
    if (!(received instanceof Entity) || !(expected instanceof Entity)) {
      return {
        message: () => `Received: "${received}" or expected: "${expected}" is not entity`,
        pass: false
      }
    }

    const pass = received.equals(expected)
    if (pass) {
      return {
        message: () => 'Is equal entities',
        pass
      }
    } else {
      return {
        message: () => `Received:\n${JSON.stringify(received, null, 2)}\nand` +
          ` expected:\n${JSON.stringify(expected, null, 2)}\nare not equal entities`,
        pass
      }
    }
  }
})
