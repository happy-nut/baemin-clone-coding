import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'restaurant_category' })
export class RestaurantCategoryEntity {
  @PrimaryColumn()
  id: string

  @Column({ type: 'varchar', length: 255 })
  name: string
}
