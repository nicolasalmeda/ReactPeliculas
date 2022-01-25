import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { get } from "../httpClient";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <ul className={styles.MoviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
