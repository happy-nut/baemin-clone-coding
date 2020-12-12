import { UniqueId } from './UniqueId'

/**
 * @class Entity
 * @desc Entities are domain objects that we care to uniquely identify.
 * Entities are compared by their unique identifier.
 * Even if an entity has different properties than another entity, two entities are the same entity if the identifiers
 * are the same.
 */
export class Entity<T> {
  public readonly props: T
  private readonly _id: UniqueId

  static isEntity (e: unknown): e is Entity<unknown> {
    return e instanceof Entity
  }

  protected constructor(props: T, id: UniqueId) {
    this.props = props
    this._id = id
  }

  get id(): UniqueId {
    return this._id
  }

  public equals (entity: Entity<T>): boolean {
    return this._id.equals(entity.id)
  }
}
