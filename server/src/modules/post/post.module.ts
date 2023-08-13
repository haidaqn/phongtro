import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Post]), ConfigModule],
    controllers: [],
    providers: []
})
export class PostModule {}
