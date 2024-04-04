import { hamburger } from "../assets/icons";
import { navLinks } from "../const";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      
      <nav className="flex justify-between items-center max-container">
        
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-monts 
                            errat leading-normal 
                            text-lg 
                            text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} width={25} height={25} />
        </div>

      </nav>

    </header>
  );
};

export default Nav;
