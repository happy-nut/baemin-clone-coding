import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class RestaurantCategoryEntity {
  @PrimaryColumn()
  id: string

  @Column({ type: 'varchar', length: 255 })
  name: string
}
