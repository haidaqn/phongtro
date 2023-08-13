import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { MainModule } from './modules/main.module';
import { User } from './modules/user/entities/user.entity';
import { Post } from './modules/post/entities/post.entity';
import { Overview } from './modules/overview/entities/overview.entity';
import { Label } from './modules/label/entities/label.entity';
import { Images } from './modules/images/entities/images.entity';
import { Category } from './modules/category/entities/category.entity';
import { Attribute } from './modules/attribute/entities/attribute.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'phong-tro-123',
            entities: [User, Post, Overview, Label, Images, Category, Attribute],
            synchronize: true
        }),
        ConfigModule.forRoot(),
        MainModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
