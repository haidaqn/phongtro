import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Images } from './entities/images.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Images]), ConfigModule],
    controllers: [],
    providers: []
})
export class ImagesModule {}
