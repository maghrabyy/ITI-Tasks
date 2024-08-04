import React from 'react';
import Product from '@/app/components/product';
import Link from 'next/link';

async function ProductsList({ params }) {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return (
    <div className="space-y-2">
      <h1 className="Products text-4xl font-bold">Products</h1>
      {params.prods ? (
        <div className="products-list grid grid-cols-4 gap-2">
          {params.prods.map((prod, index) => (
            <Link key={prod} href={`/products/${index + 1}`}>
              <Product prodName={prod} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.title}
                      src={product.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={''}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </a>
                      </h3>
                      {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}EGP
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
