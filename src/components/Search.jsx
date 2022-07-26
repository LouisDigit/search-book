import React, { useState } from "react";
import request from "superagent";
import BookList from "./BookList";

function Search() {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");

  const searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: searchField })
      .then((data) => {
        const newBooks = data.body.items;
        setBooks(newBooks);
      });
  };

  const handleSearchField = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="flex flex-col mt-5 items-center justify-center">
      <form onSubmit={(e) => searchBook(e)}>
        <input
          className="shadow appearance-none border rounded mr-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Books..."
          value={searchField}
          onChange={(e) => handleSearchField(e)}
        />
        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Search
        </button>
      </form>
      <BookList books={books} />
    </div>
  );
}

export default Search;
