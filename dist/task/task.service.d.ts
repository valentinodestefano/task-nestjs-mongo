import { Model } from 'mongoose';
import { TaskInterface } from './interface/task.interface';
import { TaskDTO } from './dto/task.dto';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: Model<TaskInterface>);
    createTask(taskDTO: TaskDTO): Promise<TaskInterface>;
    getTasks(): Promise<TaskInterface[]>;
    getTaskById(_id: string): Promise<TaskInterface>;
    updateTask(_id: string, taskDTO: TaskDTO): Promise<TaskInterface>;
    markAsCompleted(_id: string): Promise<TaskInterface>;
    deleteTask(_id: string): Promise<TaskInterface>;
    tasksForMonday(): Promise<TaskInterface[]>;
    tasksForWednesday(): Promise<TaskInterface[]>;
    tasksForSpecificDate(): Promise<TaskInterface[]>;
    tasksForFriday(): Promise<TaskInterface[]>;
    formatDate(date: any): string;
}
