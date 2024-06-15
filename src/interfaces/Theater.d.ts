import { Document } from 'mongoose';

interface IScreen {
    screen_number: number;
    seating_capacity: number;
}

interface ITheater extends Document {
    name: string;
    location: string;
    screens: IScreen[];
    createdAt: Date;
    updatedAt: Date;
}
