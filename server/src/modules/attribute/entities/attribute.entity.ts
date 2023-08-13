import { Post } from 'src/modules/post/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('attributes')
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

    @OneToOne(() => Post)
    @JoinColumn({ name: 'postId' })
    post: Post;
}
