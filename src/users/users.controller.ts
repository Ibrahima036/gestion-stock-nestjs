import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/create-user.dto';
import { User } from 'databases/entity/User.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.userService.create(userCreateDto);
  }
}
