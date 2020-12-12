interface ValueObjectProps {
    [key: string]: any;
}
export declare class ValueObject<T extends ValueObjectProps> {
    protected readonly props: T;
    protected constructor(props: T);
    equals(valueObject: ValueObject<T>): boolean;
}
export {};
