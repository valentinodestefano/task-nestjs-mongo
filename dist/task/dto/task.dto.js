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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDTO = void 0;
const api_model_property_decorator_1 = require("@nestjs/swagger/dist/decorators/api-model-property.decorator");
class TaskDTO {
}
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'creations date',
        example: '2022-03-14',
    }),
    __metadata("design:type", Date)
], TaskDTO.prototype, "created_at", void 0);
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'task title',
        example: 'Check Slack',
    }),
    __metadata("design:type", String)
], TaskDTO.prototype, "title", void 0);
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'task owner',
        example: 'Valentino Destefano',
    }),
    __metadata("design:type", String)
], TaskDTO.prototype, "owner", void 0);
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'task description',
        example: 'Please check the Slack messages',
    }),
    __metadata("design:type", String)
], TaskDTO.prototype, "description", void 0);
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'task area',
        example: 'Tech',
    }),
    __metadata("design:type", String)
], TaskDTO.prototype, "area", void 0);
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'task final date',
        example: '2022-03-16',
    }),
    __metadata("design:type", Date)
], TaskDTO.prototype, "final_date", void 0);
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'task specific date',
        example: '2022-01-12',
    }),
    __metadata("design:type", Date)
], TaskDTO.prototype, "specific_date", void 0);
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'task frecuency creation',
        example: 'monday',
    }),
    __metadata("design:type", String)
], TaskDTO.prototype, "frecuency", void 0);
__decorate([
    (0, api_model_property_decorator_1.ApiModelProperty)({
        description: 'task status',
        example: '&quot',
    }),
    __metadata("design:type", String)
], TaskDTO.prototype, "status", void 0);
exports.TaskDTO = TaskDTO;
//# sourceMappingURL=task.dto.js.map