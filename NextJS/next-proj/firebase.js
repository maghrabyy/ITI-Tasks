// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAU5DfVJpx-gBlpSOt_mJEkiL46Ve8Xiaw',
  authDomain: 'nextjs-task-e5605.firebaseapp.com',
  projectId: 'nextjs-task-e5605',
  storageBucket: 'nextjs-task-e5605.appspot.com',
  messagingSenderId: '408890756851',
  appId: '1:408890756851:web:c924b939e2049e29c0b186',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
