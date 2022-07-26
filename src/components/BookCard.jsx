import React from "react";

function BookCard(props) {
  const { title, image, published, author } = props;
  return (
    <div className="card-container w-1/4 m-5 border p-3">
      <div className="flex flex-col justify-between">
        <img src={image} class="w-auto h-96" alt="" />
        <h2>Titre : {title}</h2>
        <h3>Auteur(s) : {author}</h3>
        <p>Date : {published}</p>
      </div>
    </div>
  );
}

export default BookCard;
