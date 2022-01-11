import { MovieCard } from "./MovieCard";
import movie from "./movies.json";
import styles from "./MovieGrid.module.css";

export function MoviesGrid() {
  return (
    <ul className={styles.MoviesGrid}>
      {movie.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
