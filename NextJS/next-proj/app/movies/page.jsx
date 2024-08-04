import React from 'react';
import { WatchNowBtn } from './watchNowBtn';
import Image from 'next/image';

async function MoviesPage() {
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

  const res = await fetch(url, options);
  const movies = await res.json();
  return (
    <div className="movies-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {movies.results.map((movie) => (
        <div
          key={movie.id}
          className="card card-compact bg-base-100 shadow-xl w-full"
        >
          <figure>
            <Image
              width={185}
              height={1}
              src={`http://image.tmdb.org/t/p/w185${movie['poster_path']}`}
              alt={movie['original_title']}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie['original_title']}</h2>
            <p className=" line-clamp-3">{movie.overview}</p>
            <div className="card-actions justify-end">
              <WatchNowBtn movieId={movie.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesPage;
