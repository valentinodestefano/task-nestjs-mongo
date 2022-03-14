"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const swagger_1 = require("@nestjs/swagger");
const task_dto_1 = require("./dto/task.dto");
const schedule_1 = require("@nestjs/schedule");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createPost(res, taskDTO) {
        const task = await this.taskService.createTask(taskDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Task created',
            task: task
        });
    }
    async updateTask(res, taskDTO, _id) {
        const task = await this.taskService.updateTask(_id, taskDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Task updated'
        });
    }
    async markAsCompleted(res, _id) {
        const task = await this.taskService.markAsCompleted(_id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Task completed'
        });
    }
    async getTasks(res) {
        const tasks = await this.taskService.getTasks();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        });
    }
    async getTasksById(res, _id) {
        const tasks = await this.taskService.getTaskById(_id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        });
    }
    async getTasksEveryMonday(res) {
        const tasks = await this.taskService.tasksForMonday();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        });
    }
    async getTasksEveryWednesday(res) {
        const tasks = await this.taskService.tasksForWednesday();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        });
    }
    async getTasksEveryFriday(res) {
        const tasks = await this.taskService.tasksForFriday();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        });
    }
    async getTasksForSpecificDate(res) {
        const tasks = await this.taskService.tasksForSpecificDate();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Succesful',
            task: tasks
        });
    }
    async deleteTask(res, _id) {
        await this.taskService.deleteTask(_id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'OK (Delete)'
        });
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Post)('/createTask'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_dto_1.TaskDTO]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createPost", null);
__decorate([
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Put)('/updateTask/:_id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_dto_1.TaskDTO, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Put)('/markAsCompleted/:_id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "markAsCompleted", null);
__decorate([
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Get)('/getTasks'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasks", null);
__decorate([
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Get)('/getTasksById/:_id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasksById", null);
__decorate([
    (0, schedule_1.Cron)('* * 6 * * 1'),
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Get)('/TasksForMonday'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasksEveryMonday", null);
__decorate([
    (0, schedule_1.Cron)('* * 6 * * 3'),
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Get)('/TasksForWednesday'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasksEveryWednesday", null);
__decorate([
    (0, schedule_1.Cron)('* * 6 * * 5'),
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Get)('/TasksForFriday'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasksEveryFriday", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_6AM),
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Get)('/TasksForSpecificDate'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasksForSpecificDate", null);
__decorate([
    (0, swagger_1.ApiTags)('Task'),
    (0, common_1.Delete)('/deleteTask/:_id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map