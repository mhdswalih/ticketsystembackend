import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  payment: string;
  seatBooked: boolean;
  seatId?: number; 
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    payment: {
      type: String,
      required: true
    },
    seatBooked: {
      type: Boolean,
      default: false
    },
    seatId: {
      type: Number
    }
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', userSchema);
