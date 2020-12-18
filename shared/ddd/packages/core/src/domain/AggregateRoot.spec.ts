import { UniqueId } from './UniqueId'
import { AggregateRoot } from './AggregateRoot'

class TestAggregateRoot extends AggregateRoot<void> {
  constructor(props: void, id: UniqueId) {
    super(props, id)
  }
}

describe('AggregateRoot', () => {
  const UNIQUE_ID = new UniqueId()

  it('creates aggregate root', () => {
    const aggregateRoot = new TestAggregateRoot(undefined, UNIQUE_ID)

    expect(aggregateRoot).toBeDefined()
  })
})
