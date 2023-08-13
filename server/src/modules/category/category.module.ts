import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Category]), ConfigModule],
    controllers: [],
    providers: []
})
export class CategoryModule {}
