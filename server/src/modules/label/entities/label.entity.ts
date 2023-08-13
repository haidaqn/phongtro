import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('labels')
export class Label {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    value: string;
}
