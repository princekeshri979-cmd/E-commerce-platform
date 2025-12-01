import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';

export async function POST(request: Request) {
    await dbConnect();

    try {
        const body = await request.json();
        const { items, total, shippingAddress } = body;

        const order = await Order.create({
            items,
            total,
            shippingAddress,
            status: 'Paid', // Simulating successful payment
        });

        return NextResponse.json(order, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
    }
}
