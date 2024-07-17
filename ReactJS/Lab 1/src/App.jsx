import { Search } from './components/PetSearch/Search';
import { Header } from './components/Header';

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-6 mainP">
      <Header />
      <Search />
    </div>
  );
};

export default App;
