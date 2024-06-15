import { IMovie } from '@interfaces/Movie';
import { Schema, model } from 'mongoose';

const movieSchema = new Schema<IMovie>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        genre: { type: String, required: true },
        duration: { type: Number, required: true },
        release_date: { type: Date, required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true }
);

const Movie = model<IMovie>('Movie', movieSchema);

export default Movie;
