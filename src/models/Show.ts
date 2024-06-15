import { IShow } from '@interfaces/Show';
import { Schema, model } from 'mongoose';

const showSchema = new Schema<IShow>(
    {
        movie_id: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
        theater_id: {
            type: Schema.Types.ObjectId,
            ref: 'Theater',
            required: true,
        },
        screen_number: { type: Number, required: true },
        show_time: { type: Date, required: true },
        available_seats: { type: Number, required: true },
        price: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

// Example method
showSchema.methods.isAvailable = function (): boolean {
    return this.available_seats > 0;
};

const Show = model<IShow>('Show', showSchema);

export default Show;
