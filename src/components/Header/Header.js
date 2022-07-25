const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center pt-11">
      <div>
        <h2 className="text-stone-300 text-xs mb-2 text-center">Hello,I`m</h2>
        <h1 className="text-6xl mb-2 hover:rotate-180 hover:scale-50 text-center duration-500">Shahram</h1>
        <h2 className="text-center text-xs text-slate-300 mb-8">Junior Front Developer</h2>
      </div>
      <div className="flex justify-between gap-4">
         <button className="text-blue-400 border border-blue-400 rounded-md p-2 text-sm">Download CV</button>
         <button className="bg-blue-400 rounded-md font-thin p-2 text-gray-800  text-sm">Lets`Talk</button>
      </div>
    </header>
  );
};

export default Header;
