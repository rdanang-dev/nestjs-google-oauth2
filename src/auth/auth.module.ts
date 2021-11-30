import { Module } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  imports: [],
  providers: [GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
