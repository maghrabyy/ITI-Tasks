import { SearchForm } from '../components/PetSearch/SearchForm';
import { SearchResult } from '../components/PetSearch/SearchResult';
import { AdoptedPet } from '../components/PetSearch/AdoptedPet';
import { SearchFormProvider } from '../Context/SearchFormContext';

export const SearchPage = () => {
  return (
    <SearchFormProvider>
      <div className="search-page flex flex-col gap-2 w-full mt-[62px] mb-2">
        <div className="search-adopted grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <SearchForm />
          <AdoptedPet />
        </div>
        <SearchResult />
      </div>
    </SearchFormProvider>
  );
};
