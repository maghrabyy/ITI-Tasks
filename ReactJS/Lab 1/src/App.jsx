import { PetList } from './components/PetList';
import { Pet } from './components/Pet';
import { Search } from './components/Search';

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Search />
      <PetList>
        <Pet name="Jason" type="Cat" breed="Egyptian-Mau" />
        <Pet name="Kai" type="Cat" breed="Egyptian-Mau" />
        <Pet name="Crisps" type="Dog" breed="German Shepherd" />
      </PetList>
    </div>
  );
};

export default App;
