import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DrawerTogglerProvider } from './context/DrawerTogglerContext.jsx';

createRoot(document.getElementById('root')).render(
  <DrawerTogglerProvider>
    <App />
  </DrawerTogglerProvider>,
);
