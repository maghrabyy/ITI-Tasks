import { SearchPage } from './Pages/SearchPage';
import { DetailPage } from './Pages/DetailPage';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AdoptedPetProvider } from './Context/AdoptedPetContext';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: Infinity,
      },
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex justify-center items-center mainP">
          <ErrorBoundary>
            <AdoptedPetProvider>
              <Header />
              <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/details/:id" element={<DetailPage />} />
              </Routes>
            </AdoptedPetProvider>
          </ErrorBoundary>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
