import { NextResponse } from 'next/server';
import { db } from '@/firebase';
import { getDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export const GET = async (_, { params }) => {
  const prodId = params.prodId;
  try {
    const res = await getDoc(doc(db, 'products', prodId));
    const prodData = { ...res.data(), id: res.id };
    return NextResponse.json(prodData);
  } catch (error) {
    return NextResponse.json(
      { message: `Error occurred: couldn't fetch product ${error.message}` },
      { status: 500 },
    );
  }
};

export const DELETE = async (req, { params }) => {
  const prodId = params.prodId;
  try {
    await deleteDoc(doc(db, 'products', prodId));
    return NextResponse.json({ req: req }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error occurred: couldn't delete product ${error.message}` },
      { status: 500 },
    );
  }
};

export const PUT = async (req, { params }) => {
  const prodId = params.prodId;
  const { title, price, category, description } = await req.json();
  // console.log(title, price, category, description);
  try {
    await updateDoc(doc(db, 'products', prodId), {
      title,
      price,
      category,
      description,
    });
    return NextResponse.json({ req }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error occurred: couldn't modify product ${error.message}`,
      },
      { status: 500 },
    );
  }
};
