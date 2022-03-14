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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TaskService = class TaskService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async createTask(taskDTO) {
        const task = new this.taskModel(taskDTO);
        task.frecuency = task.frecuency.toLocaleLowerCase();
        return await task.save();
    }
    async getTasks() {
        const tasks = await this.taskModel.find();
        return tasks;
    }
    async getTaskById(_id) {
        const tasks = await this.taskModel.findById(_id);
        return tasks;
    }
    async updateTask(_id, taskDTO) {
        let updateTasks = await this.taskModel.findByIdAndUpdate(_id, taskDTO);
        return updateTasks;
    }
    async markAsCompleted(_id) {
        let completedTask = await this.taskModel.findByIdAndUpdate(_id, { status: "completed&quot" });
        return completedTask;
    }
    async deleteTask(_id) {
        const newsDeleted = await this.taskModel.findByIdAndDelete(_id);
        return newsDeleted;
    }
    async tasksForMonday() {
        let yourDate = new Date();
        yourDate.toISOString().split('T')[0];
        const tasks = await this.taskModel.find({ frecuency: 'monday' });
        for (let i = 0; i < tasks.length; i++) {
            const oneTask = tasks[i];
            if (oneTask.status == "completed&quot") {
                oneTask.created_at = yourDate;
                oneTask.status = "&quot";
                await this.createTask(oneTask);
            }
        }
        return tasks;
    }
    async tasksForWednesday() {
        let yourDate = new Date();
        yourDate.toISOString().split('T')[0];
        const tasks = await this.taskModel.find({ frecuency: 'wednesday' });
        for (let i = 0; i < tasks.length; i++) {
            const oneTask = tasks[i];
            if (oneTask.status == "completed&quot") {
                oneTask.created_at = yourDate;
                oneTask.status = "&quot";
                await this.createTask(oneTask);
            }
        }
        return tasks;
    }
    async tasksForSpecificDate() {
        let yourDate = new Date();
        yourDate.toISOString().split('T')[0];
        const compareDate = this.formatDate(yourDate);
        const tasks = await this.taskModel.find({ frecuency: 'specific' });
        for (let i = 0; i < tasks.length; i++) {
            const oneTask = tasks[i];
            const compareTaskDate = this.formatDate(oneTask.specific_date);
            console.log("CompareDate: " + compareDate);
            console.log("CompareTaskDate: " + compareTaskDate);
            if (compareTaskDate == compareDate && oneTask.status == "completed&quot") {
                oneTask.created_at = yourDate;
                oneTask.status = "&quot";
                await this.createTask(oneTask);
            }
        }
        return tasks;
    }
    async tasksForFriday() {
        let yourDate = new Date();
        yourDate.toISOString().split('T')[0];
        const tasks = await this.taskModel.find({ frecuency: 'friday' });
        for (let i = 0; i < tasks.length; i++) {
            const oneTask = tasks[i];
            if (oneTask.status == "completed&quot") {
                oneTask.created_at = yourDate;
                oneTask.status = "&quot";
                await this.createTask(oneTask);
            }
        }
        return tasks;
    }
    formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Task')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map