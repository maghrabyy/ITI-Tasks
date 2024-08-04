'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { MoviesList } from './moviesList';

function MoviesPage() {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OThkM2FjNzNkOTg0Y2FkMjY0YWI3ZmExZmMzOWNmZCIsIm5iZiI6MTcyMjc2NjkzMC41OTQxNzIsInN1YiI6IjY2YWY1NTMxNmExOWQ0YmZmMWMzN2JmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IAJ3bVhB_Gakh9rsiAq27BkMDWnwxYXqOBnMMMx-xWA',
    },
  };

  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(url, options);
      const movies = await res.json();
      setMoviesList(movies.results);
    };
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoviesSort = (e) => {
    const value = e.target.value;
    if (value === 'asc') {
      setMoviesList((movies) => [
        ...movies.sort((a, b) =>
          a['original_title'].localeCompare(b['original_title']),
        ),
      ]);
    }
    if (value === 'desc') {
      setMoviesList((movies) => [
        ...movies.sort((a, b) =>
          b['original_title'].localeCompare(a['original_title']),
        ),
      ]);
    }
    if (value === 'rateHigh') {
      setMoviesList((movies) => [
        ...movies.sort((a, b) => b['vote_average'] - a['vote_average']),
      ]);
    }
    if (value === 'rateLow') {
      setMoviesList((movies) => [
        ...movies.sort((a, b) => a['vote_average'] - b['vote_average']),
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Top Rated Movies</h1>
        <select
          onChange={handleMoviesSort}
          className="select select-bordered w-full max-w-xs self-end"
        >
          <option value="rateHigh">From highest rating</option>
          <option value="rateLow">From Lowest rating</option>
          <option value="asc">Titles - From A to Z</option>
          <option value="desc">Titles - From Z to A</option>
        </select>
      </header>
      <MoviesList moviesList={moviesList} />
    </div>
  );
}

export default MoviesPage;
