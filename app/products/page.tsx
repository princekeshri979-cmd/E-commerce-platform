import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';

async function getProducts(search: string | undefined, category: string | undefined) {
    await dbConnect();

    let query: any = {};

    if (search) {
        query.name = { $regex: search, $options: 'i' };
    }

    if (category && category !== 'All') {
        query.category = category;
    }

    const products = await Product.find(query).sort({ createdAt: -1 }).lean();

    return products.map((product: any) => ({
        ...product,
        _id: product._id.toString(),
        createdAt: product.createdAt?.toISOString(),
        updatedAt: product.updatedAt?.toISOString(),
    }));
}

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedSearchParams = await searchParams;
    const search = typeof resolvedSearchParams.search === 'string' ? resolvedSearchParams.search : undefined;
    const category = typeof resolvedSearchParams.category === 'string' ? resolvedSearchParams.category : undefined;

    const products = await getProducts(search, category);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">All Products</h1>

                <ProductFilters />

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-lg text-gray-500">No products found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
