/**
 * Custom guard to validate if all requests have authToken.
 * The authToken value for this guard is 123456. It should be a env variable
 * ```
 *  AUTH_TOKEN=ANY_STRING
 * ```
 */

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
