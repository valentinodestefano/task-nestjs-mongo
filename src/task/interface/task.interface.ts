import { Document } from "mongoose";

export interface TaskInterface extends Document {

    created_at: Date;
    readonly title: string;
    readonly owner: string;
    readonly description: string;
    readonly area: string;
    final_date: Date;
    specific_date: Date;
    frecuency: string;
    status: string;

}