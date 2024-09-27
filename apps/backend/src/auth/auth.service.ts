import { Injectable, NotImplementedException } from '@nestjs/common';
import { AuthResponse, LoginBody, RegisterBody } from '@skill-swap/types';

@Injectable()
export class AuthService {
  login(body: LoginBody): AuthResponse | void {
    try {
      throw new NotImplementedException();
    } catch {}
  }
  registration(body: RegisterBody): AuthResponse | void {
    try {
      throw new NotImplementedException();
    } catch {}
  }
}
