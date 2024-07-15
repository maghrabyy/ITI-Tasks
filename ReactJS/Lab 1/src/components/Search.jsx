export const Search = () => {
  const inputValue = 'cat';

  return (
    <form className="rounded-md border-slate-800 m-2 gap-2 inline-flex flex-col items-center bg-black py-2 px-4 bg-opacity-60">
      <label className="text-white font-bold text-2xl" htmlFor="animal-search">
        Search for animal
      </label>
      <input
        value={inputValue}
        type="text"
        id="animal-search"
        className="rounded-md p-1"
      />
      <button className="bg-slate-900 py-2 px-4 rounded-md text-white">
        Search
      </button>
    </form>
  );
};
