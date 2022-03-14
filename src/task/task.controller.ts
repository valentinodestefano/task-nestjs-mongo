import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';

import { TaskService } from './task.service';

import { ApiTags } from '@nestjs/swagger';
import { TaskDTO } from './dto/task.dto';
import { Cron, CronExpression } from '@nestjs/schedule';


@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService){}

    @ApiTags('Task')
    @Post('/createTask')
    async createPost(@Res() res, @Body() taskDTO: TaskDTO){
        const task = await this.taskService.createTask(taskDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Task created',
            task: task
        });
    }

    @ApiTags('Task')
    @Put('/updateTask/:_id')
    async updateTask(@Res() res, @Body() taskDTO: TaskDTO, @Param('_id') _id: string){
        const task = await this.taskService.updateTask(_id, taskDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Task updated'
        });
    }

    @ApiTags('Task')
    @Put('/markAsCompleted/:_id')
    async markAsCompleted(@Res() res, @Param('_id') _id: string){
        const task = await this.taskService.markAsCompleted(_id);
        return res.status(HttpStatus.OK).json({
            message: 'Task completed'
        });
    }

    
    @ApiTags('Task')
    @Get('/getTasks')
    async getTasks(@Res() res){
        const tasks = await this.taskService.getTasks();
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        })
    }

    @ApiTags('Task')
    @Get('/getTasksById/:_id')
    async getTasksById(@Res() res, @Param('_id') _id: string){
        const tasks = await this.taskService.getTaskById(_id);
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        })
    }

    @Cron('* * 6 * * 1') //EVERY MONDAY 6AM
    @ApiTags('Task')
    @Get('/TasksForMonday')
    async getTasksEveryMonday(@Res() res){
        const tasks = await this.taskService.tasksForMonday();
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        })
    }

    @Cron('* * 6 * * 3') //EVERY WEDNESDAY 6AM
    @ApiTags('Task')
    @Get('/TasksForWednesday')
    async getTasksEveryWednesday(@Res() res){
        const tasks = await this.taskService.tasksForWednesday();
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        })
    }

    @Cron('* * 6 * * 5') //EVERY FRIDAY 6AM
    @ApiTags('Task')
    @Get('/TasksForFriday')
    async getTasksEveryFriday(@Res() res){
        const tasks = await this.taskService.tasksForFriday();
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        })
    }

    @Cron(CronExpression.EVERY_DAY_AT_6AM)
    @ApiTags('Task')
    @Get('/TasksForSpecificDate')
    async getTasksForSpecificDate(@Res() res){
        const tasks = await this.taskService.tasksForSpecificDate();
        return res.status(HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        })
    }

    @ApiTags('Task')
    @Delete('/deleteTask/:_id')
    async deleteTask(@Res() res, @Param('_id') _id: string){
        await this.taskService.deleteTask(_id);
        return res.status(HttpStatus.OK).json({
            message: 'OK (Delete)'
        })
    }

}
