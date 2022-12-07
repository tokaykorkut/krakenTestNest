import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        bodyParser: true,
    });

    // * Helmet provides sensible security headers default
    app.use(helmet());

    // * We need this because "cookie" is true in csrfProtection
    app.use(cookieParser());

    app.use(
        rateLimit({
            windowMs: 60 * 1000, // 1 minutes
            max: 5000, // limit each IP to 5000 requests per windowMs
        }),
    );

    app.useGlobalPipes(
        new ValidationPipe({
            forbidNonWhitelisted: true,
            whitelist: true,
            exceptionFactory: (errors): BadRequestException =>
                new BadRequestException(errors),
        }),
    );
    // * Winston Logger integration
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

    await app.listen(process.env.PORT || 3333);
}
bootstrap();
