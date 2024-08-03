import React from 'react';
import Product from '@/app/components/product';
import Link from 'next/link';

function ProductsList({ params }) {
  return (
    <div className="space-y-2">
      <h1 className="Products text-4xl font-bold">Products</h1>
      <div className="products-list grid grid-cols-4 gap-2">
        {params.prods?.map((prod, index) => (
          <Link key={prod} href={`/products/${index + 1}`}>
            <Product prodName={prod} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
