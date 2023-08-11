import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Attribute {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  price: string;
  @Column()
  acreage: string;
  @Column()
  published: string;
  @Column()
  hashtag: string;
}
