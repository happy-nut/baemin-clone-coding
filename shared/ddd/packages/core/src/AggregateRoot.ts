import { Entity } from './Entity'

/**
 * @class AggregateRoot
 * @desc An "aggregate" is a cluster of associated objects that we treat as a unit for the purpose of data changes.
 *
 * TODO: Dispatch Domain Events.
 */
export abstract class AggregateRoot<T> extends Entity<T> {
}
