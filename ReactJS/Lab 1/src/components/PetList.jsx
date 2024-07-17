export const PetList = ({ children }) => {
  return (
    <div className="pet-list grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {children}
    </div>
  );
};
