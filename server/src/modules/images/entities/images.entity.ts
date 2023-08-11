import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  images: string;
}
