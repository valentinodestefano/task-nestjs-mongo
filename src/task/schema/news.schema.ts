import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

@Schema()
export class Task{

    @Prop()
    created_at: Date;

    @Prop()
    title: string;

    @Prop()
    owner: string;

    @Prop()
    description: string;

    @Prop()
    area: string;

    @Prop()
    final_date: Date;

    @Prop()
    specific_date: Date;
    
    @Prop()
    frecuency: string;

    @Prop()
    status: string;

}

export const TaskSchema = SchemaFactory.createForClass(Task);