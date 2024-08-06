import React from 'react';
import Product from '@/app/components/product';
import Link from 'next/link';
import { ProductCard } from '../productCard';
import axios from 'axios';
import { AddNewProductBtn } from './addNewProduct';

async function ProductsList({ params }) {
  const res = await axios.get('http://localhost:3000/api/products');
  const products = res.data;
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
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Customers also purchased
              </h2>
              <AddNewProductBtn />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
