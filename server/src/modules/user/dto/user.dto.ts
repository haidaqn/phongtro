import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty()
    phone: string;
    @IsNotEmpty()
    password: string;
}

export class RegisterUserDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    phone: string;
    @IsNotEmpty()
    password: string;
}