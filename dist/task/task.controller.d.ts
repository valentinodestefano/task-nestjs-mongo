import { TaskService } from './task.service';
import { TaskDTO } from './dto/task.dto';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    createPost(res: any, taskDTO: TaskDTO): Promise<any>;
    updateTask(res: any, taskDTO: TaskDTO, _id: string): Promise<any>;
    markAsCompleted(res: any, _id: string): Promise<any>;
    getTasks(res: any): Promise<any>;
    getTasksById(res: any, _id: string): Promise<any>;
    getTasksEveryMonday(res: any): Promise<any>;
    getTasksEveryWednesday(res: any): Promise<any>;
    getTasksEveryFriday(res: any): Promise<any>;
    getTasksForSpecificDate(res: any): Promise<any>;
    deleteTask(res: any, _id: string): Promise<any>;
}
