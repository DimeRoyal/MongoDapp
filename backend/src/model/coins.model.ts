import { Schema, model, Document } from "mongoose";
import slugify from "slugify";

export interface ICoin extends Document {
  name: string;
  slug: string;
  symbol: string;
  thumbnail: string;
  createdAt: Date;
}

const coinSchema = new Schema<ICoin>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  symbol: { type: String, required: true },
  thumbnail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

coinSchema.pre<ICoin>('save', function (next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slugify(this.name, { lower: true });
  next();
})

const coinModel = model<ICoin>("coins", coinSchema);

export default coinModel;
