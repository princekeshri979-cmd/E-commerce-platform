import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';

export async function GET() {
    await dbConnect();

    try {
        const orders = await Order.find({}).sort({ createdAt: -1 }).populate('items.product');
        return NextResponse.json(orders);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching orders' }, { status: 500 });
    }
}
