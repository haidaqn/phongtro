import { Module } from '@nestjs/common';
import { MainModule } from './modules/main.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
@Module({
  imports: [
    MainModule,
    TypeOrmModule.forRoot({
      // ket noi mysql
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'phong-tro-123',
      entities: [],
      synchronize: false,
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
