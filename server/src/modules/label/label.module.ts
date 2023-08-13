import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Label } from './entities/label.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Label]), ConfigModule],
    controllers: [],
    providers: []
})
export class LabelModule {}
