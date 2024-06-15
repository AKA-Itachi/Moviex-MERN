import { IUser } from '@interfaces/User';
import mongoose, { Schema } from 'mongoose';
const UserSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lasttName: { type: String, required: true },
        role: { type: Schema.Types.ObjectId, required: true },
    },
    {
        timestamps: true,
    }
);
UserSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('hash')) {
        return next();
    }
    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(10);
    this.hash = await bcrypt.hash(this.hash, salt);
    next();
});
export default mongoose.model<IUser>('User', UserSchema);
