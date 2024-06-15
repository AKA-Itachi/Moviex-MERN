import { Document } from 'mongoose';

interface IReview extends Document {
    movie_id: Schema.Types.ObjectId;
    user_id: Schema.Types.ObjectId;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
