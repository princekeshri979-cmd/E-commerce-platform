import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IOrder extends Document {
    user?: string; // Optional if guest checkout
    items: {
        product: string;
        quantity: number;
        price: number;
    }[];
    total: number;
    status: string;
    shippingAddress: {
        name: string;
        address: string;
        city: string;
        postalCode: string;
        country: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        items: [
            {
                product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true },
            },
        ],
        total: { type: Number, required: true },
        status: { type: String, default: 'Pending' },
        shippingAddress: {
            name: { type: String, required: true },
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
        },
    },
    { timestamps: true }
);

const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
