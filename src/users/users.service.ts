import { Injectable } from '@nestjs/common';
import { UserRepository } from 'databases/repositories/user.repository';
import { UserCreateDto } from './dto/create-user.dto';
import { User } from 'databases/entity/User.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userCreateDto: UserCreateDto): Promise<User> {
    const user = this.userRepository.create(userCreateDto);
    return await this.userRepository.save(user);
  }

  async findOne(username: string): Promise<User> {
    return await this.userRepository.findOneOrFail({
      where: { username: username },
    });
  }
}
