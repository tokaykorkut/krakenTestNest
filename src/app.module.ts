import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import {
    WinstonModule,
    utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';
import { OutageModule } from './modules/outage/outage.module';
import { SiteInfoModule } from './modules/site-info/site-info.module';
import { SiteOutageModule } from './modules/site-outage/site-outage.module';

// * Env File directory
const envFilePath = path.resolve(process.cwd(), '.env');
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                //* server port
                PORT: Joi.number().required(),
                //* x-api-key
                TOKEN: Joi.string().required(),
                // * winston
                LOG_DEFAULT_LEVEL: Joi.string()
                    .valid(
                        'error',
                        'warn',
                        'info',
                        'http',
                        'verbose',
                        'debug',
                        'silly',
                    )
                    .allow('')
                    .optional()
                    .default('debug'),
            }),
            envFilePath,
        }),
        WinstonModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                levels: winston.config.npm.levels,
                level: configService.get<string>('LOG_DEFAULT_LEVEL', 'debug'),
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(
                            winston.format.timestamp(),
                            winston.format.colorize({ all: true }),
                            nestWinstonModuleUtilities.format.nestLike(),
                        ),
                    }),
                ],
            }),
            inject: [ConfigService],
        }),
        OutageModule,
        SiteOutageModule,
        SiteInfoModule,
    ],
    providers: [],
})
export class AppModule {}
