import "./styles.css";
import React, { useState } from "react";
const booksDictionary = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5",description:"Eloquent JavaScript is great beginner's book, The goal of Eloquent JavaScript is to not only teach you JavaScript, but also teach you programming." },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      description:"This is a series of books diving deep into the core mechanisms of the JavaScript language."
    },
    {
      name: "Effective JavaScript",
      rating: "4.3/5",
      description:"In his book Effective JavaScript, author David Herman discusses how to use JavaScript effectively to write more portable maintainable etc"
    }
  ],
  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      description:"The story is set in the land of Meluha and starts with the arrival of the Shiva. "
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      description:" It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby."
    },
    { name: "The Great Gatsby", rating: "3.9/5",description:"the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan." }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
      description:"Never Split the Difference takes you inside his world of high-stakes negotiations, revealing the nine key principles that helped Voss and his colleagues succeed."
    },
    {
      name: "Loonshots",
      rating: "5/5",
      description:" first book Loonshots: How to Nurture the Crazy Ideas That Win Wars, Cure Diseases, and Transform Industries,etc"
    },
    {
      name: "The ONE Thing",
      rating: "4.1/5",
      description:"The book discusses the value of simplifying one's workload by focusing on the one most important task in any given project."
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
              <div style={{ fontSize: "12px",textAlign:"justify" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
