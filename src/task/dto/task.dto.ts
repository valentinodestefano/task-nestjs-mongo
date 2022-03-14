import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class TaskDTO {


@ApiModelProperty({
    description: 'creations date',
    example: '2022-03-14',
})
readonly created_at: Date;

@ApiModelProperty({
    description: 'task title',
    example: 'Check Slack',
})
readonly title: string;


@ApiModelProperty({
    description: 'task owner',
    example: 'Valentino Destefano',
})
readonly owner: string;

@ApiModelProperty({
    description: 'task description',
    example: 'Please check the Slack messages',
})
readonly description: string;

@ApiModelProperty({
    description: 'task area',
    example: 'Tech',
})
readonly area: string;

@ApiModelProperty({
    description: 'task final date',
    example: '2022-03-16',
})
readonly final_date: Date;

@ApiModelProperty({
    description: 'task specific date',
    example: '2022-01-12',
})
readonly specific_date: Date;

@ApiModelProperty({
    description: 'task frecuency creation',
    example: 'monday',
})
readonly frecuency: string;

@ApiModelProperty({
    description: 'task status',
    example: '&quot',
})
readonly status: string;


}