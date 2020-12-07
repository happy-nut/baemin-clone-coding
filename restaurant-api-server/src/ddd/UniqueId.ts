import { nanoid } from 'nanoid'

export class UniqueId {
  public value: string

  constructor(id?: string) {
    this.value = id ?? nanoid()
  }

  equals (id: UniqueId): boolean {
    return this.value === id.value
  }
}
