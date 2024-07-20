import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petAPI = createApi({
  reducerPath: 'petApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://pets-v2.dev-apis.com' }),
  endpoints: (builder) => ({
    fetchPets: builder.query({
      query: ({ animalType, animalBreed, location }) => ({
        url: `/pets`,
        params: { animal: animalType, breed: animalBreed, location },
      }),
      transformResponse: (data) => data.pets,
    }),
    fetchAnimalBreeds: builder.query({
      query: (animal) => ({
        url: `/breeds`,
        params: { animal },
      }),
      transformResponse: (data) => data.breeds,
    }),
    fetchPetDetails: builder.query({
      query: (id) => ({
        url: `/pets`,
        params: { id },
      }),
      transformResponse: (data) => data.pets[0],
    }),
  }),
});

export const {
  useFetchPetsQuery,
  useFetchPetDetailsQuery,
  useFetchAnimalBreedsQuery,
} = petAPI;
