import { NextResponse } from 'next/server';
import { db } from '@/firebase';
import { getDocs, collection, addDoc } from 'firebase/firestore';

export const GET = async () => {
  try {
    const snapshotQuery = await getDocs(collection(db, 'products'));
    let productsList = [];
    snapshotQuery.forEach((doc) => {
      productsList.push({ ...doc.data(), id: doc.id });
    });
    return NextResponse.json(productsList);
  } catch (error) {
    return NextResponse.json(
      { message: `Error occurred: couldn't fetch products ${error.message}` },
      { status: 500 },
    );
  }
};

export const POST = async (request, res) => {
  const { title, price, category, description } = await request.json();
  try {
    await addDoc(collection(db, 'products'), {
      title,
      price,
      category,
      description,
    });
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error occurred: couldn't post product ${error.message}` },
      { status: 500 },
    );
  }
};
