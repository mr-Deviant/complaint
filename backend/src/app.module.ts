import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    CompanyModule,
    PersonModule,
    ProductModule,
    CategoryModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}