import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Images } from '../../images/entities/images.entity';
import { Attribute } from '../../attribute/entities/attribute.entity';
import { User } from '../../user/entities/user.entity';

@Entity('posts')
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

    @ManyToOne(() => Attribute)
    @JoinColumn({ name: 'attributesId' })
    attributes: Attribute;

    @Column()
    categoryCode: string;

    @Column({ type: 'text' })
    description: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Images)
    @JoinColumn({ name: 'imagesId' })
    images: Images;
}
