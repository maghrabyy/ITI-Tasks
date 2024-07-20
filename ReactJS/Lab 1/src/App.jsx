import { SearchPage } from './Pages/SearchPage';
import { DetailPage } from './Pages/DetailPage';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { store } from './Store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex justify-center items-center mainP">
        <ErrorBoundary>
          <Provider store={store}>
            <Header />
            <Routes>
              <Route path="/" element={<SearchPage />} />
              <Route path="/details/:id" element={<DetailPage />} />
            </Routes>
          </Provider>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;
