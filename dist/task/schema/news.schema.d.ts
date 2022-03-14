import * as mongoose from 'mongoose';
export declare class Task {
    created_at: Date;
    title: string;
    owner: string;
    description: string;
    area: string;
    final_date: Date;
    specific_date: Date;
    frecuency: string;
    status: string;
}
export declare const TaskSchema: mongoose.Schema<mongoose.Document<Task, any, any>, mongoose.Model<mongoose.Document<Task, any, any>, any, any, any>, any, any>;
