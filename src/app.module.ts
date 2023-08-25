import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { IamModule } from './iam/iam.module';
import { LearningModule } from './learning/learning.module';

@Module({
  imports: [SharedModule, IamModule, LearningModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
