import { Document } from 'mongoose';

interface IShow extends Document {
    movie_id: Schema.Types.ObjectId;
    theater_id: Schema.Types.ObjectId;
    screen_number: number;
    show_time: Date;
    available_seats: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}
