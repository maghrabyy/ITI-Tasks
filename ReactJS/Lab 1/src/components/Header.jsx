export const Header = () => {
  return (
    <header className="header fixed top-0 left-0 w-full mainP py-2">
      <div className="logo-title inline-flex items-center gap-2 cursor-pointer">
        <img src="../assets/paw-print.png" className="w-10" alt="paw print" />
        <h1 className="title">Adopt Me!</h1>
      </div>
    </header>
  );
};
