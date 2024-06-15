import { Document } from 'mongoose';

export interface IPromotion extends Document {
    code: string;
    description: string;
    discount_percentage: number;
    valid_from: Date;
    valid_until: Date;
    createdAt: Date;
    updatedAt: Date;
}
