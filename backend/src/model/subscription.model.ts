import { Schema, model, Document } from "mongoose";
import slugify from "slugify";

interface investmentLimitType {
    min: number,
    max: number,
    infinite: boolean
}

export interface ISubscription extends Document {
    name: string;
    slug: string;
    price: number,
    duration: number,
    noOfTrades: number,
    investmentLimit: investmentLimitType,
}

const subscriptionSchema = new Schema<ISubscription>({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    price: {type: Number, required: true },
    duration: {type: Number, required: true },
    noOfTrades: {type: Number, required: true },
    investmentLimit: {type: Object, required: true },
});

subscriptionSchema.pre<ISubscription>("save", function(next) {
    if (!this.isModified("name")) {
        return next();
    }
    this.slug = slugify(this.name, { lower: true });
    next();
});

const subscriptionModel = model<ISubscription>("subscriptions", subscriptionSchema);

export default subscriptionModel;
