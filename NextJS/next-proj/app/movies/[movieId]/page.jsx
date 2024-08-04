import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';

async function MovieDetail({ params }) {
  const url = `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OThkM2FjNzNkOTg0Y2FkMjY0YWI3ZmExZmMzOWNmZCIsIm5iZiI6MTcyMjc2NjkzMC41OTQxNzIsInN1YiI6IjY2YWY1NTMxNmExOWQ0YmZmMWMzN2JmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IAJ3bVhB_Gakh9rsiAq27BkMDWnwxYXqOBnMMMx-xWA',
    },
  };
  const res = await fetch(url, options);
  const movie = await res.json();
  return (
    <div className="mockup-browser bg-base-300 border">
      <div className="mockup-browser-toolbar">
        <div className="input">https://NextMovies.com</div>
        <Link href="/movies">Back</Link>
      </div>
      <div className="bg-base-200 px-4 py-16 grid grid-cols-3">
        <Image
          width={185}
          height={0}
          className="w-auto h-auto col-span-1 place-self-center"
          src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`}
          alt={movie['original_title']}
        />
        <div className="movie-info col-span-2">
          <h1 className="text-4xl font-bold">{movie['original_title']}</h1>
          <div className="text-xl flex items-center gap-2 font-semibold">
            <FaImdb className="text-4xl text-yellow-700" />{' '}
            {movie['vote_average'].toFixed(1)}
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
