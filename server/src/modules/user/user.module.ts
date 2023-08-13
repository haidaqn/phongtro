import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User]), ConfigModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
