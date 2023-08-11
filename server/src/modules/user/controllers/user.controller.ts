import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('user')
export class UserController{
    // constructor (private readonly user)
    @Get()
    async get() {
        return 'hai dang';
    }
}