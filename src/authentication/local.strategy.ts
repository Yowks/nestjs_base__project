import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from './service/authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthenticationService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
    
        const foundUser = await this.authService.validateUser(username, password);
        if (!foundUser) {
            throw new UnauthorizedException();
        }
        return foundUser;
    }
}