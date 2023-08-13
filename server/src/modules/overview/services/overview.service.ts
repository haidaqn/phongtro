import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, In, Like, Repository, UpdateResult } from 'typeorm';
import { Overview } from '../entities/overview.entity';


@Injectable()
export class OverviewService {
    constructor(@InjectRepository(Overview) private overviewRepository: Repository<Overview>) { }

    async getAll() {
        return await this.overviewRepository.find();
    }
}
