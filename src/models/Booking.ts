import { IBooking } from '@interfaces/Booking';
import { Schema, model } from 'mongoose';

const bookingSchema = new Schema<IBooking>(
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        show_id: { type: Schema.Types.ObjectId, ref: 'Show', required: true },
        seats_booked: [
            {
                seat_number: { type: String, required: true },
            },
        ],
        total_price: { type: Number, required: true },
        booking_date: { type: Date, default: Date.now },
        payment_status: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Booking = model<IBooking>('Booking', bookingSchema);

export default Booking;
