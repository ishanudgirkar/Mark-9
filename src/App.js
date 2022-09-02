import React from "react";
import "./styles.css";
import { useState } from "react";

const musichub = {
  "Hip hop": [
    { name: "Lungi Dance", artist: "Yo Yo Honey Singh" },
    { name: "Bad Boy", artist: "Badshah and Neeti Mohan" },
    { name: "Kohinoor", artist: "Divine" }
  ],

  Classics: [
    {
      name: "Ek raasta hai zindagi",
      artist: "Kishore Kumar & Lata Mangeshkar"
    },
    {
      name: "Kya Hua Tera Wada",
      artist: "Mohammed Rafi, R. D. Burman, and Sushma Shreshta"
    },
    {
      name: "Chithi Na Koi Sandesh",
      artist: "Jagjit Singh"
    }
  ],
  "00's Romance Hits": [
    {
      name: "Falak Tak",
      artist: "Mahalakshmi Iyer and Udit Narayan"
    },
    {
      name: "Tera Hone Laga Hoon",
      artist: "Atif Aslam , Alisha Chinai & Pritam"
    },
    {
      name: "Chand Sifarish",
      artist: "Jatin Lalit,Shaan,Kailash kher & Prasoon Joshi"
    }
  ],

  "Bollywood Dance": [
    {
      name: "Badtameez Dil",
      artist: "Benny Dayal and Shefali Alvares"
    },
    {
      name: "Aankh Marey",
      artist: "Kumar Sanu, Mika Singh, and Neha Kakkar"
    },
    {
      name: "London Thumakda",
      artist: " Labh Janjua, Neha Kakkar, and Sonu Kakkar"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Bollywood Dance");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎶Play Beat</h1>
      <p style={{ fontSize: "small" }}>
        {" "}
        Checkout my favorite music. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(musichub).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#fee2e2",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musichub[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
