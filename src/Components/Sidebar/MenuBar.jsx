import React, { useState } from "react";

import CreateBook from "../Books/CreateBook";
import Books from "../Books/Books";
import { useBookCtx } from "../../Contexts/BookCtx";
import Notes from "../Notes/Notes";

const MenuBar = () => {
  const [selectedBook, setSelectedBook] = useState(false);

  const { books } = useBookCtx();

  return (
    <>
      <aside className="flex flex-col shrink-0 w-72 my-2 ml-2 z-10 px-5 py-5 space-y-5 border-2 rounded-lg shadow-lg bg-white">
        <CreateBook />

        <section>
          <div className="flex items-center space-x-2 border-b py-2">
            {/* <span class="material-symbols-outlined">book_4</span> */}
            <h5 className="font-bold">Books</h5>
          </div>

          <div className=" space-y-2 my-2 ml-1 overflow-y-auto">
            {books &&
              books.map((book) => (
                <Books
                  onClick={() => {
                    setSelectedBook({ id: book.id, name: book.title });
                  }}
                  key={book.id}
                  bookData={book}
                  selectedBook={selectedBook}
                />
              ))}
          </div>
        </section>
      </aside>

      {selectedBook && (
        <Notes bookId={selectedBook.id} bookName={selectedBook.name} />
      )}
    </>
  );
};

export default MenuBar;
