import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/authentication/model/user.entity';

@Injectable()
export class AuthenticationService {
  constructor(@InjectRepository(User) private user_repository: Repository<User>, private jwt: JwtService) { }

  async signup(user: User): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.id+''+user.password_hash, salt);
    user.password_hash = hash
    return await this.user_repository.save(user);
  }
  
  async validateUser(username: string, password: string): Promise<any> {
    const foundUser = await this.user_repository.findOneBy({name: username});;
    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password_hash)) {
        const { password_hash, ...result } = foundUser
        return result;
      }
      return null;
    }
    return null
  }

  async login(user: any) {
      const payload = { username: user.name, sub: user.id, mail:user.mail };

      return {
        access_token: this.jwt.sign(payload),
      };
  }
}