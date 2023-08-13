import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('overviews')
export class Overview {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    area: string;

    @Column()
    type: string;

    @Column()
    target: string;

    @Column()
    bonus: string;

    @Column()
    created: string;

    @Column()
    expired: string;
}
