import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, In, Like, Repository, UpdateResult } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../entities/user.entity';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getAll() {
        return await this.userRepository.find();
    }
}
