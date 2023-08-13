import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Attribute]), ConfigModule],
    controllers: [],
    providers: []
})
export class AttributeModule {}
