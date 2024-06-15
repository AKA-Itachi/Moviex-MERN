import { Document } from 'mongoose';

interface IMovie extends Document {
    title: string;
    description: string;
    genre: string;
    duration: number;
    release_date: Date;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}
