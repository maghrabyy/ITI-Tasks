import { WatchNowBtn } from './watchNowBtn';
import Image from 'next/image';

export const MoviesList = ({ moviesList }) => {
  return (
    <div className="movies-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {moviesList?.map((movie) => (
        <div
          key={movie.id}
          className="card card-compact bg-base-100 shadow-xl w-full"
        >
          <figure>
            <Image
              width={185}
              height={0}
              className="w-auto h-auto"
              src={`https://image.tmdb.org/t/p/original${movie['poster_path']}`}
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
};
