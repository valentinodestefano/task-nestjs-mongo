import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';


import { TaskInterface } from './interface/task.interface';

import { TaskDTO } from './dto/task.dto';




@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') private readonly taskModel: Model<TaskInterface>){}
    
    
    async createTask(taskDTO: TaskDTO): Promise<TaskInterface>{
        const task = new this.taskModel(taskDTO);
        task.frecuency = task.frecuency.toLocaleLowerCase(); //frecuency to lowercase
        return await task.save();
    }

    async getTasks(): Promise<TaskInterface[]>{
        const tasks = await this.taskModel.find();
        return tasks;
    }

    async getTaskById(_id: string): Promise<TaskInterface>{
        const tasks = await this.taskModel.findById(_id);
        return tasks;
    }

    async updateTask(_id: string, taskDTO: TaskDTO): Promise<TaskInterface> {
        let updateTasks = await this.taskModel.findByIdAndUpdate(_id, taskDTO);
        //updateTasks = this.taskModel.updateOne(taskDTO);
        return updateTasks;
    }
    
    async markAsCompleted(_id: string): Promise<TaskInterface> {
        let completedTask = await this.taskModel.findByIdAndUpdate(_id, { status: "completed&quot"});
        return completedTask;
    }


    async deleteTask(_id: string): Promise<TaskInterface>{
        const newsDeleted = await this.taskModel.findByIdAndDelete(_id);
        return newsDeleted;
    }

    async tasksForMonday(): Promise<TaskInterface[]>{
        let yourDate = new Date()
        yourDate.toISOString().split('T')[0]
        const tasks = await this.taskModel.find({ frecuency: 'monday' });
        for(let i=0; i < tasks.length; i++) {
            const oneTask = tasks[i];
            if(oneTask.status == "completed&quot") {
                oneTask.created_at = yourDate;
                oneTask.status = "&quot";
                await this.createTask(oneTask);
            }
        }

        return tasks;
    }

    async tasksForWednesday(): Promise<TaskInterface[]>{
        let yourDate = new Date()
        yourDate.toISOString().split('T')[0]
        const tasks = await this.taskModel.find({ frecuency: 'wednesday' });
        for(let i=0; i < tasks.length; i++) {
            const oneTask = tasks[i];
            if(oneTask.status == "completed&quot") {
                oneTask.created_at = yourDate;
                oneTask.status = "&quot";
                await this.createTask(oneTask);
            }
        }

        return tasks;
    }

    async tasksForSpecificDate(): Promise<TaskInterface[]>{
        let yourDate = new Date()
        yourDate.toISOString().split('T')[0]
        const compareDate = this.formatDate(yourDate);

        const tasks = await this.taskModel.find({ frecuency: 'specific' });

        for(let i=0; i < tasks.length; i++) {
            const oneTask = tasks[i];
            const compareTaskDate = this.formatDate(oneTask.specific_date);
            console.log("CompareDate: " + compareDate);
            console.log("CompareTaskDate: " + compareTaskDate);
            if(compareTaskDate == compareDate && oneTask.status == "completed&quot") {
                oneTask.created_at = yourDate;
                oneTask.status = "&quot";
                await this.createTask(oneTask);
            }
        }

        return tasks;
    }

    async tasksForFriday(): Promise<TaskInterface[]>{
        let yourDate = new Date()
        yourDate.toISOString().split('T')[0]
        const tasks = await this.taskModel.find({ frecuency: 'friday' });
        for(let i=0; i < tasks.length; i++) {
            const oneTask = tasks[i];
            if(oneTask.status == "completed&quot") {
                oneTask.created_at = yourDate;
                oneTask.status = "&quot";
                await this.createTask(oneTask);
            }
        }

        return tasks;
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }


}
