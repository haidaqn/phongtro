import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Overview } from './entities/overview.entity';
import { OverviewService } from './services/overview.service';
import { OverviewController } from './controllers/overview.controller';
@Module({
    imports: [TypeOrmModule.forFeature([Overview]), ConfigModule],
    controllers: [OverviewController],
    providers: [OverviewService]
})
export class OverviewModule {}
