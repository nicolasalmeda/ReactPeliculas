import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { get } from "../httpClient";
import { Spinner } from "../components/Spinner";
import { useQuery } from "../hooks/useQuery";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setisLoading(true);
    const searchURL = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchURL).then((data) => {
      setMovies(data.results);
      setisLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.MoviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
