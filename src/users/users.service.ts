import { Injectable } from '@nestjs/common';
import { UserRepository } from 'databases/repositories/user.repository';
import { UserCreateDto } from './dto/create-user.dto';
import { User } from 'databases/entity/User.entity';
import { hashPassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create({ username, password: pass }: UserCreateDto): Promise<User> {
    const password = hashPassword(pass);
    console.log(pass, password);
    const user = this.userRepository.create({ username, password });
    return await this.userRepository.save(user);
  }

  async findOne(username: string): Promise<User> {
    return await this.userRepository.findOneOrFail({
      where: { username: username },
    });
  }
}
