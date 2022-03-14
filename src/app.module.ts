import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TaskModule, ScheduleModule.forRoot(), MongooseModule.forRoot('mongodb+srv://USERNAME:PASSWORD@cluster0.hqhas.mongodb.net/DATABASENAME?retryWrites=true&w=majority'), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

