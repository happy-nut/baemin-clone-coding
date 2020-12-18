import { Entity } from './Entity'
import { UniqueId } from './UniqueId'

class TestEntity extends Entity<void> {
  constructor(props: void, id: UniqueId) {
    super(props, id)
  }
}

describe('Entity', () => {
  const UNIQUE_ID_1 = new UniqueId()
  const UNIQUE_ID_2 = new UniqueId()

  it('creates an Entity', () => {
    const entity = new TestEntity(undefined, UNIQUE_ID_1)

    expect(entity).toBeDefined()
  })

  describe('isEntity', () => {
    it('returns false if given value is undefined', () => {
      expect(Entity.isEntity(undefined)).toBeFalse()
    })

    it('returns false if given value is null', () => {
      expect(Entity.isEntity(null)).toBeFalse()
    })

    it('returns false if given value is an empty object', () => {
      expect(Entity.isEntity({})).toBeFalse()
    })

    it('returns true if given value is an entity', () => {
      const entity = new TestEntity(undefined, UNIQUE_ID_1)

      expect(Entity.isEntity(entity)).toBeTrue()
    })
  })

  describe('equals', () => {
    it('returns true when given entity is itself', () => {
      const entity = new TestEntity(undefined, UNIQUE_ID_1)

      expect(entity.equals(entity)).toBeTrue()
    })

    it('returns false when given entity has different ID', () => {
      const entity1 = new TestEntity(undefined, UNIQUE_ID_1)
      const entity2 = new TestEntity(undefined, UNIQUE_ID_2)

      expect(entity1.equals(entity2)).toBeFalse()
    })

    it('returns true when given entity has equal ID', () => {
      const entity1 = new TestEntity(undefined, UNIQUE_ID_1)
      const entity2 = new TestEntity(undefined, UNIQUE_ID_1)

      expect(entity1.equals(entity2)).toBeTrue()
    })
  })
})
