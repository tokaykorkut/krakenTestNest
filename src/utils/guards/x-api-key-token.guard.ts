import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { ErrorMessageEnum } from '../enums';

@Injectable()
export class XApiKeyTokenGuard implements CanActivate {
    constructor(private readonly configService: ConfigService) {}
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        if (
            (request.headers['x-api-key'] as string) !==
            this.configService.get<string>('TOKEN')
        ) {
            throw new HttpException(
                ErrorMessageEnum.FORBIDDEN,
                HttpStatus.FORBIDDEN,
            );
        }
        return true;
    }
}
