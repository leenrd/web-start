import { goToLink } from "../../utils/go-link";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 px-9 py-3 w-full border-b border-b-slate-200 fixed bg-white backdrop-blur-lg z-10 transition-all">
      <div className="text-2xl font-bold flex gap-2 items-center">
        <img className="w-5 h-5" src="assets/logo.svg" />
        <h1 className="text-lg tracking-tight">
          <span className="text-blue-600">forge</span> starter
        </h1>
      </div>
      <div></div>
      <div className="flex justify-end items-center">
        <button
          className="hover:border-slate-200 shadow px-3.5 py-1.5 cursor-pointer rounded-md hover:shadow-xl hover:transition-all duration-300"
          onClick={() => goToLink("https://github.com/leenrd/web-start")}
        >
          Github
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
