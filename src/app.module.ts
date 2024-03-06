import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { AdminModule } from './api/admin/admin.module';
import { DashboardModule } from './api/dashboard/dashboard.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, AdminModule, DashboardModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
