import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Overview } from './entities/overview.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Overview]), ConfigModule],
    controllers: [],
    providers: []
})
export class OverviewModule {}
