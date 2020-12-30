import { Logger, Module } from '@nestjs/common'
import { HealthzController } from './presentation/healthz/healthzController'
import { DatabaseModule } from './modules/database'
import { ListRestaurantCategoriesController } from './presentation/list-restaurant-categories'
import { ListRestaurantCategoriesUseCase } from './application/list-restaurant-categories'
import { RESTAURANT_CATEGORY_REPOSITORY } from './domain/RestaurantCategoryRepository'
import { TypeOrmRestaurantCategoryRepository } from './infra/typeorm/repositories'

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    HealthzController,
    ListRestaurantCategoriesController
  ],
  providers: [
    Logger,
    ListRestaurantCategoriesUseCase,
    {
      provide: RESTAURANT_CATEGORY_REPOSITORY,
      useClass: TypeOrmRestaurantCategoryRepository
    }
  ]
})
export class AppModule {}
