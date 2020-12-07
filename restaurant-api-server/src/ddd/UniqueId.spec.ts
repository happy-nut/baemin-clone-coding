import { UniqueId } from './UniqueId'

describe('UniqueId', () => {
  describe('equals', () => {
    it('returns false if given id is not equal', () => {
      const id1 = new UniqueId()
      const id2 = new UniqueId()

      expect(id1.equals(id2)).toBeFalse()
    })

    it('returns true if given id is equal', () => {
      const id1 = new UniqueId()

      expect(id1.equals(id1)).toBeTrue()
    })

    it('returns false if given id with props is not equal', () => {
      const id1 = new UniqueId('test-id-1')
      const id2 = new UniqueId('test-id-2')

      expect(id1.equals(id2)).toBeFalse()
    })

    it('returns true if given id with props is equal', () => {
      const id1 = new UniqueId('test-id')
      const id2 = new UniqueId('test-id')

      expect(id1.equals(id2)).toBeTrue()
    })
  })
})
