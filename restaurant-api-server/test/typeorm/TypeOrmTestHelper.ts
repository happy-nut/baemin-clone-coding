import _ from 'lodash'
import { Connection, Table } from 'typeorm'

export class TypeOrmTestHelper {
  constructor (private readonly connection: Connection) {}

  async tearDown (): Promise<void> {
    const entities = _.map(
      this.connection.entityMetadatas,
      (e) => ({ tablePath: e.tablePath })
    )
    await this.connection.transaction(async (entityManager) => {
      await entityManager.query('SET FOREIGN_KEY_CHECKS = 0;')
      for (const entity of entities) {
        const runner = entityManager.connection.createQueryRunner()
        await runner.dropTable(await runner.getTable(entity.tablePath) as Table)
      }
      await entityManager.query('SET FOREIGN_KEY_CHECKS = 1;')
    })
    await this.connection.close()
  }
}
