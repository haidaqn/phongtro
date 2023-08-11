import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Overview {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  code: string;
  @Column()
  area: string;
  @Column()
  target: string;
  @Column()
    bonus: string;
    @Column()
  type: string;
    @Column()
    created: Date;
    @Column()
    expire: Date;
}