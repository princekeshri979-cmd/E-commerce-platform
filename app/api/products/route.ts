import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

export async function GET(request: Request) {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const category = searchParams.get('category');

    let query: any = {};

    if (search) {
        query.name = { $regex: search, $options: 'i' };
    }

    if (category && category !== 'All') {
        query.category = category;
    }

    try {
        const products = await Product.find(query);
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
    }
}
