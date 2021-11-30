import "./styles.css";
import React, { useState } from "react";
const booksDictionary = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    {
      name: "You Don't Know JS",
      rating: "3.5/5"
    },
    {
      name: "Effective JavaScript",
      rating: "4.3/5"
    }
  ],
  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    },
    { name: "The Great Gatsby", rating: "3.9/5" }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "2rem" }}>📚 goodbooks </h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div>
        {Object.keys(booksDictionary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "10px",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontWeight: "300",
              fontSize: "0.9rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {booksDictionary[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                fontSize: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
