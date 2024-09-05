import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Plant } from '../../plant/entities/plant.entity';

@Entity()
export class Monitoring {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  monitoredAt: Date;  // Fecha y hora del monitoreo

  @Column()
  observations: string;  // Observaciones generales

  @Column({ nullable: true })
  height?: number;  // Altura de la planta (cm)

  @Column({ nullable: true })
  healthStatus?: string;  // Estado de salud de la planta

  @Column({ nullable: true })
  growthStage?: string;  // Etapa de crecimiento

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;  // Usuario que realiza el monitoreo

  @ManyToOne(() => Plant, plant => plant.id)
  @JoinColumn({ name: 'plantId' })
  plant: Plant;  // Planta monitoreada
}
