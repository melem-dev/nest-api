import { Module } from '@nestjs/common';
import { SessionModule } from './http/session/session.module';
import { UserModule } from './http/user/user.module';

@Module({
  imports: [SessionModule, UserModule]
})
export class InfraModule {}
