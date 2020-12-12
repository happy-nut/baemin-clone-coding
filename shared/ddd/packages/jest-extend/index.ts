/* eslint-disable */

import { Entity, ValueObject } from '@ddd/core'
import './matchers'

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualEntity (expected: Entity<any>): CustomMatcherResult
      toEqualValueObject (expected: ValueObject<any>): CustomMatcherResult
    }
  }
}
