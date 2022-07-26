import React from "react";
import BookCard from "./BookCard";
import defaultImg from "../images/defaultImg.jpeg";

function BookList(props) {
  const { books } = props;
  return (
    <div className="flex flex-row flex-wrap mt-10 justify-center">
      {books.map((book, i) => {
        {
          return <BookCard book={book} key={i} />;
        }
      })}
    </div>
  );
}

export default BookList;
