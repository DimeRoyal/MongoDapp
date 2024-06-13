import { Schema, model, Document } from "mongoose";
import slugify from "slugify";

export interface IUser extends Document {
  name: string;
  slug: string;
  subscriptionEnable: any, // 1 : 1 relation with subscription model
  referrals: any[], // 1 : many relation with other users
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  subscriptionEnable: { type: Schema.Types.ObjectId, ref: 'subscriptions' },
  referrals: [{ type: Schema.Types.ObjectId, ref: 'users' }],
});

userSchema.pre<IUser>("save", function(next) {
  if (!this.isModified("name")) {
    return next();
  }
  this.slug = slugify(this.name, { lower: true });
  next();
});

const userModel = model<IUser>("users", userSchema);

export default userModel;
