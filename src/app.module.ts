import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule,
      TypeOrmModule.forRoot({
        type: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'sa',
        password: 'mssql1Ipw',
        database: 'Tellocast',
        entities: [User],
        synchronize: true,
        extra: {
          trustServerCertificate: true,
        }
      }),
      UsersModule,
  ],
  
})
export class AppModule {}
