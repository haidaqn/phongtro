import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  code: string;
  @Column()
  value: string;
  @Column()
  header: string;
  @Column()
  subheader: string;
}
