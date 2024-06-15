import { IPromotion } from '@interfaces/Promotion';
import { Schema, model } from 'mongoose';

const promotionSchema = new Schema<IPromotion>(
    {
        code: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        discount_percentage: { type: Number, required: true },
        valid_from: { type: Date, required: true },
        valid_until: { type: Date, required: true },
    },
    {
        timestamps: true,
    }
);

const Promotion = model<IPromotion>('Promotion', promotionSchema);

export default Promotion;
