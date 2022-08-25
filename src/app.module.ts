import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { AuthModule } from 'artifacts/auth/auth.module';
import configuration from './config/configuration';
import { FooModule } from './foo/foo.module';
import { ProductModule } from './product/product.module';
// import { FooProductModule } from './foo-product/foo-product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    HealthModule,
    AuthModule,
    FooModule,
    ProductModule,
    // FooProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
