import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ComplaintModule } from './complaint/complaint.module';
import { CategoryModule } from './category/category.module';
import { CountryModule } from './country/country.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'frontend'),
      exclude: ['/api/(.*)'],
    }),
    AuthModule,
    ComplaintModule,
    CategoryModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
