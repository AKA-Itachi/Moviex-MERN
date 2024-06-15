import { ITheater } from '@interfaces/Theater';
import { Schema, model, Document } from 'mongoose';

const theaterSchema = new Schema<ITheater>(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        screens: [
            {
                screen_number: { type: Number, required: true },
                seating_capacity: { type: Number, required: true },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Theater = model<ITheater>('Theater', theaterSchema);

export default Theater;
