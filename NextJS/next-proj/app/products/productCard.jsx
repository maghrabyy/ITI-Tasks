import Image from 'next/image';
import defaultImage from '@/assets/default-product.png';

export const ProductCard = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          width={250}
          height={0}
          alt={product.title}
          src={product.image ?? defaultImage}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}EGP</p>
      </div>
    </div>
  );
};
