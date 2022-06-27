import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../model/user.entity';
import { UserDto } from '../dto/user.dto';

@Controller('api/v1/authentication/')
export class AuthenticationController {
    constructor(private user_service: AuthenticationService) { }
    
    /**
     * @returns an object user after bein registered
     * @param user_dto  - user dto
     */
    @Post('signup')
    async signup(@Body() user_dto: UserDto): Promise<User> {
        return this.user_service.signup(user_dto);
    }

    /**
     * @returns token of authentified user
     * @param user_dto  - user dto
     */
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.user_service.login(req.user)
    }
}