import React from "react";
import BookCard from "./BookCard";

function BookList(props) {
  const { books } = props;
  return (
    <div className="flex flex-row flex-wrap mt-10 justify-center">
      {books.map((book, i) => {
        {
          return (
            <BookCard
              key={i}
              title={book.volumeInfo.title}
              image={book.volumeInfo.imageLinks.thumbnail}
              published={book.volumeInfo.publishedDate}
              author={book.volumeInfo.authors}
            />
          );
        }
      })}
    </div>
  );
}

export default BookList;
