export const fetchBreedList = async ({ queryKey }) => {
  const animalType = queryKey[1];
  if (!animalType) {
    return [];
  }
  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animalType}`,
  );
  if (!res.ok) {
    throw new Error("Couldn't fetch animal's breed list.");
  }
  return res.json();
};
