import { configureStore } from '@reduxjs/toolkit';
import adoptedPet from './adoptedPetSlice';
import { petAPI } from '../APIs/petAPI';

export const store = configureStore({
  reducer: {
    adoptedPet,
    [petAPI.reducerPath]: petAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petAPI.middleware),
});
