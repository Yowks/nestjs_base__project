import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/authentication/model/user.entity';
import { UserDto } from '../dto/user.dto';
var md5 = require('md5');

@Injectable()
export class AuthenticationService {
  constructor(@InjectRepository(User) private user_repository: Repository<User>, private jwt: JwtService) { }

  async signup(user_dto: UserDto): Promise<User> {
    const hash = await md5(user_dto.id+''+user_dto.password_hash);
    user_dto.password_hash = hash
    return await this.user_repository.save(user_dto);
  }
  
  async validateUser(mail: string, password: string): Promise<any> {
    const foundUser = await this.user_repository.findOneBy({email: mail});
    if (foundUser) {
      if (await md5(foundUser.id+''+password) == foundUser.password_hash) {
        const { password_hash, ...result } = foundUser
        return result;
      }
      return null;
    }
    return null
  }

  async login(user: any) {
      const payload = { username: user.name, sub: user.id, mail:user.email };

      return {
        access_token: this.jwt.sign(payload),
      };
  }
}