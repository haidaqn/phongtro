import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import {JwtModule} from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            global:true,
            secret:'123456',
            signOptions:{expiresIn:100}
        }),
    ConfigModule
    ],
    controllers: [UserController,AuthController],
    providers: [AuthService],
})
export class UserModule {}
