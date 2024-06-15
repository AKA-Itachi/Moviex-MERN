import { IReview } from '@interfaces/Review';
import { Schema, model } from 'mongoose';

const reviewSchema = new Schema<IReview>(
    {
        movie_id: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
        user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Review = model<IReview>('Review', reviewSchema);

export default Review;
