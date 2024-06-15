import { IPayment } from '@interfaces/Payment';
import { Schema, model } from 'mongoose';

const paymentSchema = new Schema<IPayment>(
    {
        booking_id: {
            type: Schema.Types.ObjectId,
            ref: 'Booking',
            required: true,
        },
        amount: { type: Number, required: true },
        payment_method: { type: String, required: true },
        payment_date: { type: Date, default: Date.now },
        status: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Payment = model<IPayment>('Payment', paymentSchema);

export default Payment;
