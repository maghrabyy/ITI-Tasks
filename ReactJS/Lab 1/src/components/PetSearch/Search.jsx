import { SearchForm } from './SearchForm';
import { SearchResult } from './SearchResult';
import { useState } from 'react';

export const Search = () => {
  const [petsList, setPetsList] = useState([]);
  const [isResultLoading, setIsResultLoading] = useState(false);
  const [petError, setPetError] = useState(null);
  return (
    <div className="search flex flex-col gap-2 w-full mt-[56px]">
      <SearchForm
        setIsResultLoading={setIsResultLoading}
        setPetsList={setPetsList}
        setPetError={setPetError}
      />
      {isResultLoading ? (
        <div className="loader self-center"></div>
      ) : (
        <SearchResult petsList={petsList} petError={petError} />
      )}
    </div>
  );
};
