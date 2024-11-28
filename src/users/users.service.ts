import { Injectable } from '@nestjs/common';
import { UserRepository } from 'databases/repositories/user.repository';
import { UserCreateDto } from './dto/create-user.dto';
import { User } from 'databases/entity/User.entity';
import { hashPassword } from 'src/utils/bcrypt';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailService: EmailService,
  ) {}

  async create({ username, password: pass }: UserCreateDto): Promise<User> {
    const password = hashPassword(pass);
    const user = this.userRepository.create({ username, password });

    this.emailService.sendEmailTemplate(
      user.username,
      "Creation d'un nouveau compte",
      'welcome',
      user,
      'image.webp',
    );
    return await this.userRepository.save(user);
  }

  async findOne(username: string): Promise<User> {
    return await this.userRepository.findOneOrFail({
      where: { username: username },
    });
  }
}
