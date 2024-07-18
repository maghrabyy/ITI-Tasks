export const fetchPetsList = async ({ queryKey }) => {
  const { animalType, location, animalBreed } = queryKey[1];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animalType}&location=${location}&breed=${animalBreed}`,
  );
  if (!res.ok) {
    throw new Error("Couldn't fetch pets data.");
  }
  return res.json();
};
