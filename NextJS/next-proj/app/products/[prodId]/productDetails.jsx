'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import defaultImage from '@/assets/default-product.png';

export const ProductDetails = ({ product }) => {
  const [isModifying, setIsModifying] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const deleteProdHandler = async (prodId) => {
    console.log(prodId);
    try {
      await axios.delete(`http://localhost:3000/api/products/${prodId}`);
      router.push('/products');
    } catch (error) {
      console.error(error);
    }
  };

  const submitModify = async (e) => {
    e.preventDefault();
    if (title && price && category && description) {
      try {
        const res = await axios.put(
          `http://localhost:3000/api/products/${product.id}`,
          { title, price, category, description },
        );
        setIsModifying(false);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("You can't leave any of this fields empty.");
    }
  };

  const updateProdHandler = () => {
    setIsModifying(true);
    setTitle(product.title);
    setPrice(product.price);
    setCategory(product.category);
    setDescription(product.description);
  };
  return (
    <div className="bg-white flex justify-between">
      <div>
        <Image
          width={250}
          height={0}
          alt={product.title}
          src={product.image ?? defaultImage}
          className="w-[250px] object-cover object-center"
        />
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.title}
          </h1>
          <div className="space-y-6">
            <p className="text-base text-gray-900">{product.description}</p>
          </div>
          <p className="text-3xl tracking-tight text-gray-900">
            {Number(product.price).toLocaleString()} EGP
          </p>
          <div className="action mt-5 space-x-2">
            <button
              className="btn btn-error text-white"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              Delete Product
            </button>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Delete product</h3>
                <p>Are you sure you want to delete this product?</p>
                <div className="modal-action">
                  <form method="dialog" className="space-x-2">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      onClick={() => deleteProdHandler(product.id)}
                      className="btn"
                    >
                      Delete product
                    </button>
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button onClick={updateProdHandler} className="btn btn-primary">
              Update product
            </button>
          </div>
        </div>
      </div>
      <form
        className={`${isModifying ? 'flex' : 'hidden'} flex-col gap-2`}
        onSubmit={submitModify}
      >
        {error && <div className="bg-red-500 text-white p-2">{error}</div>}
        <input
          type="text"
          placeholder="Product Title"
          className="input input-bordered w-full max-w-xs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          className="input input-bordered w-full max-w-xs"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Category"
          className="input input-bordered w-full max-w-xs"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="action flex gap-2">
          <button
            className="btn btn-error"
            onClick={() => setIsModifying(false)}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={submitModify}>
            Modify
          </button>
        </div>
      </form>
    </div>
  );
};
