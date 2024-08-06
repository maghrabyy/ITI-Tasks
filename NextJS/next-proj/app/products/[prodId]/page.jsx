import React from 'react';
import axios from 'axios';
import { ProductDetails } from './productDetails';

async function ProductDetailPage({ params }) {
  const prodId = params.prodId;
  const res = await axios.get(`http://localhost:3000/api/products/${prodId}`);
  const product = res.data;
  return <ProductDetails product={product} />;
}

export default ProductDetailPage;
