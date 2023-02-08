import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authToken = request.header('Auth');
    const isAuth = authToken === '123456';

    if (!isAuth) {
      throw new UnauthorizedException('request is not allowed');
    }

    return isAuth;
  }
}
