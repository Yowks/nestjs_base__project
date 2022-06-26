import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from './service/authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authentication_service: AuthenticationService) {
        super();
    }

    async validate(mail: string, password: string): Promise<any> {
    
        const foundUser = await this.authentication_service.validateUser(mail, password);
        if (!foundUser) {
            throw new UnauthorizedException();
        }
        return foundUser;
    }
}