import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({
    username,
    password: pass,
  }: SignInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user) {
      if (comparePassword(pass, user?.password)) {
        const payload = { sub: user.id, username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    }
    throw new BadRequestException('Mot de pass ou username incorrect !!');
  }
}
