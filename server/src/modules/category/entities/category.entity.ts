import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
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
