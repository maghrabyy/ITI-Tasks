'use client';
import { useState } from 'react';
import axios from 'axios';

export const AddNewProductBtn = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const clearFields = () => {
    setTitle('');
    setPrice('');
    setCategory('');
    setDescription('');
  };

  const addProductHandler = async (e) => {
    e.preventDefault();

    if (title && price && category && description) {
      try {
        const res = await axios.post('http://localhost:3000/api/products', {
          title,
          price,
          category,
          description,
        });
        console.log(res);
        setError('');
        clearFields();
        document.getElementById('my_modal_1').close();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setError("You can't leave any of this fields empty.");
    }
  };

  const closeModalHandler = () => {
    setError('');
    clearFields();
  };
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        Add Product
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add new product</h3>
          <form className={`flex flex-col gap-2`} onSubmit={addProductHandler}>
            {error && (
              <div className="bg-red-500 text-white p-2">
                You can't leave any of this fields empty.
              </div>
            )}
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
          </form>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={addProductHandler} className="btn">
                Add product
              </button>
              <button onClick={closeModalHandler} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
