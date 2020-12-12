import { UniqueId } from './UniqueId';
export declare class Entity<T> {
    readonly props: T;
    private readonly _id;
    static isEntity(e: unknown): e is Entity<unknown>;
    protected constructor(props: T, id: UniqueId);
    get id(): UniqueId;
    equals(entity: Entity<T>): boolean;
}
