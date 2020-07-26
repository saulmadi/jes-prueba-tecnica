import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule, ConfigService} from '@nestjs/config';
import configuration from './config/configuration';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SqlServerConnectionOptions} from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import {CommonModule} from './common/common.module';
import {FiscaliasModule} from './fiscalias/fiscalias.module';
import {Fiscalia} from './fiscalias/entities/fiscalia';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const config: SqlServerConnectionOptions = {
          type: 'mssql',
          host: configService.get('DATABASE_HOST', 'localhost'),
          port: parseInt(configService.get('DATABASE_PORT', '1433')),
          username: configService.get('DATABASE_USER', 'sa'),
          password: configService.get('DATABASE_PASSWORD', 'sa'),
          database: configService.get('DATABASE_NAME', 'MinisterioPublico'),
          entities: [Fiscalia],
        };
        return config;
      },
    }),
    CommonModule,
    FiscaliasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
