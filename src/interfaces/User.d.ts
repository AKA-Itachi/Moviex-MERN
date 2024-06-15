import { Document, ObjectId } from 'mongoose';

export interface IUser extends Document {
    email: string;
    hash: string;
    firstName: string;
    lasttName: string;
    role: ObjectId;
}
