import db from './connect';
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

// collection ref (init a books table instance)
const colRef = collection(db, 'books');

// get docs (records) from collection
export const getBooks = async () => {
  try {
    const snapshot = await getDocs(colRef);
    const docs = snapshot.docs;
    const books = docs.map((record) => {
      return {
        ...record.data(),
        id: record.id,
      };
    });
    console.log(books);
    return books;
  } catch (e) {
    console.error(e);
  }
};

export const addBook = async (payload) => {
  try {
    return await addDoc(colRef, payload);
  } catch (e) {
    console.error(e);
  }
};

export const deleteBook = async (id) => {
  try {
    const docRef = doc(db, 'books', id);
    return await deleteDoc(docRef);
  } catch (e) {
    console.error(e);
  }
};
