import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'databases/entity/User.entity';
import { UserRepository } from 'databases/repositories/user.repository';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, UserRepository],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
