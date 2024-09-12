export default function ProductList({products}) {
    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl font-semibold mb-5 text-center">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.length > 0 && products.map((product) => (
                        <div key={product.id} className="group border border-gray-500 rounded p-3">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    alt={product.title}
                                    src={product.thumbnail}
                                    className="h-full w-full border object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm">{product.title}</h3>
                            <p className="mt-1 text-lg font-medium">${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}  