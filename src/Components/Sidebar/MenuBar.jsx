import React from "react";

import CreateBook from "../Books/CreateBook";
import Books from "../Books/Books";
import { useBookCtx } from "../../Contexts/BookCtx";

const MenuBar = () => {
  const { books } = useBookCtx();

  return (
    <aside className="flex flex-col w-72 m-2 px-5 py-5 space-y-5 border-2 rounded-lg shadow-lg bg-white">
      <CreateBook />
      <section>
        <div className="flex items-center space-x-2 border-b py-2">
          {/* <span class="material-symbols-outlined">book_4</span> */}
          <h5 className="font-semibold">Books</h5>
        </div>

        <div className="h-[68vh] space-y-2 my-2 ml-1 overflow-y-auto">
          {books &&
            books.map((book) => <Books key={book.id} bookData={book} />)}
        </div>
      </section>
    </aside>
  );
};

export default MenuBar;
