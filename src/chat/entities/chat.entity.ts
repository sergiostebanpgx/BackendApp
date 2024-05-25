// chat.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string; // Contenido del mensaje

  @ManyToOne(() => User, user => user.sentMessages)
  sender: User; // Usuario que envía el mensaje

  @ManyToOne(() => User, user => user.receivedMessages)
  receiver: User; // Usuario que recibe el mensaje
}

