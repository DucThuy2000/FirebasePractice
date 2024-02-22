import './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// init services (init a db instance)
const db = getFirestore();

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

    return books;
  } catch (e) {
    console.error(e);
  }
};
