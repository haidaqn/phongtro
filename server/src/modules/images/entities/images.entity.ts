import { Post } from 'src/modules/post/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('images')
export class Images {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'text' })
    image: string;
    @OneToOne(() => Post)
    @JoinColumn({ name: 'postId' })
    post: Post;
}
