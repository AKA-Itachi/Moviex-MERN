import { Document } from 'mongoose';

interface IPayment extends Document {
    booking_id: Schema.Types.ObjectId;
    amount: number;
    payment_method: string;
    payment_date: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
