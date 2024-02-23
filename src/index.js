console.log('123');
import { getBooks, addBook, deleteBook } from './services/firebase/books';

getBooks();

// Add doc form
const addForm = document.querySelector('#add-doc');
addForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    title: addForm.title.value,
    author: addForm.author.value,
  };

  const response = await addBook(payload);
  if (response.id) {
    alert(`Successfully Added ID: ${response.id}`);
    addForm.reset();
  }
});

const deleteForm = document.querySelector('#delete-doc');
deleteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = deleteForm.id.value;
  if (!id) return;
  await deleteBook(id);
  deleteForm.reset();
});
