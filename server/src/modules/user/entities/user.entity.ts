import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../../post/entities/post.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn() // Sử dụng decorator này để tạo cột chính tự động tăng
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    zalo: string;

    @Column()
    fbUrl: string;

    @Column()
    avatar: Buffer;

    // @OneToMany(() => Post, post => post.user)
    // posts: Post[];
}
