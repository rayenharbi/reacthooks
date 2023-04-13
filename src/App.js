// App.js (example usage of components)
import React, { useState } from "react";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
 import './App.css';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "American Psycho",
      description: "wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      rating: 4.5,
    },
    {
      title: "Django Unchained",
      description: "The story follows an enslaved black man who trains under a German bounty hunter, with the ultimate goal of reuniting with his long-lost wife",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
      rating: 3.8,
    },
    {
      title: "The Great Gatsby",
      description: " it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg",
      rating: 4.8,
    },
    {
      title: "Catch Me If You Can",
      description: "The screenplay by Jeff Nathanson is based on the semi-autobiographical book of the same name of Frank Abagnale, who claims that before his 19th birthday, he successfully performed cons worth millions of dollars by posing as a Pan American World Airways pilot, a Georgia doctor, and a Louisiana parish prosecutor.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
      rating: 4.2,
    },
    {
      title: "Fight Club",
      description: " it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      rating: 3.5,
    },
    {
      title: "Blade Runner 2049",
      description: " It is based on the 1996 novel of the same name by Chuck Palahniuk",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
      rating: 3.6,
    },
    {
      title: "The Maze Runner",
      description: "a group of 50 amnesiac boys live in a clearing (called the Glade; they're called Gladers) that is in turn surrounded by an intricate maze.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
      rating: 4.6,
    },
    {
      title: "Deadpool",
      description: "Deadpool is a highly trained assassin and mercenary.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      rating: 4.6,
    },
    {
      title: "The Fast and the Furious: Tokyo Drift",
      description: "The Fast and the Furious: Tokyo Drift is a 2006 action film directed by Justin Lin and written by Chris Morgan. It is the standalone sequel to The Fast and the Furious (2001) and 2 Fast 2 Furious (2003) and is the third main installment in the Fast & Furious franchise.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
      rating: 4.6,
    },
    {
      title: "2 Fast 2 Furious",
      description: "2 Fast 2 Furious is a 2003 action film directed by John Singleton from a screenplay by Michael Brandt and Derek Haas, based on a story by Brandt, Haas, and Gary Scott Thompson. It is the sequel to The Fast and the Furious (2001).",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      rating:7.5,
    },
    {
      title: "Fury",
      description: "The film portrays US tank crews fighting in Germany during the final weeks of the European theater of World War II.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg",
      rating: 7.6,
    },
    {
      title: "Peaky Blinders",
      description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg",
      rating: 5.6,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const handleTitleChange = (value) => {
    setFilterTitle(value);
  };

  const handleRatingChange = (value) => {
    setFilterRating(value);
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    
    <div className="grid-container">
      <h1>Movies</h1>
      <Filter
        title={filterTitle}
        rating={filterRating}
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies}  />
      {/* Render AddMovie component here with handleAddMovie as prop */}
      
    </div>
  );
};

export default App;
