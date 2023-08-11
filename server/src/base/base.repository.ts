import { Model, FindOptions } from 'sequelize';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
Injectable()
export class BaseRepository<T extends Model> {
  constructor(private readonly model: T) {}
}
