import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../model/user.entity';

@Controller('api/v1/authentication/')
export class AuthenticationController {
    constructor(private user_service: AuthenticationService) { }
    
    @Post('signup')
    async signup(@Body() user: User): Promise<User> {
        return this.user_service.signup(user);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.user_service.login(req.user)
    }
}