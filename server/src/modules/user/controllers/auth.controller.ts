import { Body, Controller, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from '../dto/user.dto';
import { AuthService } from '../services/auth.service'; 

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto) {
        return this.authService.register(registerUserDto);
    }

    @Post('login')
    @UsePipes(ValidationPipe)
    async login(@Body() loginUserDto:LoginUserDto) {
        return this.authService.login(loginUserDto);
    }

    @Post('refresh-token')
    refreshToken(@Body() {refresh_token}){
        return this.authService.refreshToken(refresh_token);
    }

}