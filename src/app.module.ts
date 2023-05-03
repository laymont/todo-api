import { UserModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { User } from './users/user.entity';
import { TaskController } from './task/controllers/task.controller';
import { TaskService } from './task/services/task.service';
import { Task } from './task/task.entity';
import { AssignmentController } from './assignments/controllers/assignment.controller';
import { AssignmentService } from './assignments/services/assignment.service';
import { Assignment } from './assignments/assignment.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mydb.sqlite',
      entities: [User, Task, Assignment],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Task, Assignment]),
  ],
  controllers: [AppController, UserController, TaskController, AssignmentController],
  providers: [AppService, UserService, TaskService, AssignmentService],
})
export class AppModule {}
