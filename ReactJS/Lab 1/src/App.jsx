import { Search } from './components/PetSearch/Search';
import './app.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 md:px-20 lg:px-28">
      <div className="main-title flex gap-2">
        <img src="../assets/paw-print.png" className="w-10" alt="paw print" />
        <h1 className="title">Adopt Me!</h1>
      </div>
      <Search />
    </div>
  );
};

export default App;
