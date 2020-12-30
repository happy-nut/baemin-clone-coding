import { Inject, Injectable } from '@nestjs/common'
import { RestaurantCategoryRepository } from '../../../domain/RestaurantCategoryRepository'
import { Connection, Repository } from 'typeorm'
import { RestaurantCategoryEntity } from '../entities'
import { DATABASE_CONNECTION } from '../../../modules/database/DatabaseProvider'
import { RestaurantCategory } from '../../../domain/RestaurantCategory'
import _ from 'lodash'
import { RestaurantCategoryEntityMapper } from '../entities/mappers'

@Injectable()
export class TypeOrmRestaurantCategoryRepository implements RestaurantCategoryRepository {
  private readonly repository: Repository<RestaurantCategoryEntity>

  constructor (@Inject(DATABASE_CONNECTION) private readonly connection: Connection) {
    this.repository = connection.getRepository(RestaurantCategoryEntity)
  }

  async findAll (): Promise<RestaurantCategory[]> {
    const entities = await this.repository.find()
    return _.map(entities, RestaurantCategoryEntityMapper.toDomain)
  }

  /**
   * NOTE: This method is only for the test. Do not call this from the others.
   */
  async _save (restaurantCategory: RestaurantCategory): Promise<RestaurantCategory> {
    const entity = RestaurantCategoryEntityMapper.fromDomain(restaurantCategory)
    const result = await this.repository.save(entity)
    return RestaurantCategoryEntityMapper.toDomain(result)
  }
}
