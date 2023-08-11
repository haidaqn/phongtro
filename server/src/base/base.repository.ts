import { Model, FindOptions } from 'sequelize';

export class BaseRepository<T extends Model> {
  constructor(private readonly model: T) {}

}
