import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        console.log('\n🔍 Configurando banco de dados...');
        console.log('Host:', configService.get('DB_HOST'));
        console.log('Port:', configService.get('DB_PORT'));
        console.log('User:', configService.get('DB_USER'));
        console.log('Password exists:', !!configService.get('DB_PASSWORD'));
        console.log('Password length:', configService.get('DB_PASSWORD')?.length);
        console.log('Database:', configService.get('DB_NAME'));
        
        // ✅ Mostra as primeiros caracteres da senha (para debug)
        const password = configService.get('DB_PASSWORD');
        if (password) {
          console.log('Password preview:', password.substring(0, 5) + '...');
        }
        
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: parseInt(configService.get('DB_PORT', '6543')),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: process.env.NODE_ENV !== 'production',
          ssl: {
            rejectUnauthorized: false,
          },
          connectTimeoutMS: 30000,
        };
      },
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
