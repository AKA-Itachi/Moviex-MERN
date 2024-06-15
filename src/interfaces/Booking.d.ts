import { Document } from 'mongoose';

interface ISeat {
    seat_number: string;
}

interface IBooking extends Document {
    user_id: Schema.Types.ObjectId;
    show_id: Schema.Types.ObjectId;
    seats_booked: ISeat[];
    total_price: number;
    booking_date: Date;
    payment_status: string;
    createdAt: Date;
    updatedAt: Date;
}
