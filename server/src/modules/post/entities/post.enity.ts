import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  star: string;
  @Column()
  labelCode: string;
  @Column()
  address: string;
  @Column()
  attributesId: string;
  @Column()
  categoryCode: string;
  @Column('text')
  description: string;
  @Column()
  userId: string;
  @Column()
  overviewId: string;
  @Column()
  imagesId: string;
}
