'use client';
import { useRouter } from 'next/navigation';

export const WatchNowBtn = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/movies/${movieId}`);
      }}
      className="btn btn-primary"
    >
      Watch Now
    </button>
  );
};
