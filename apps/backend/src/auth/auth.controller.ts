import { Body, Controller, Post } from '@nestjs/common';
import { RegisterBodyDto } from '@skill-swap/dtos';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  login(@Body() body: RegisterBodyDto) {
    return this.authService.login(body);
  }
  @Post('/registration')
  registration(@Body() body: RegisterBodyDto) {
    return this.authService.login(body);
  }
}
