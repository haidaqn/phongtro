import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Label {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  code: string;
  @Column()
  value: number;
}