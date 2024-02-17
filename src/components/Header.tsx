/* eslint-disable @next/next/no-img-element */
import { useToggle } from "usehooks-ts";
import { Instagram, X } from "lucide-react";

const Header = () => {
  const [open, toggle] = useToggle(false);

  return (
    <header className="bg-white">
      <div className="relative flex h-full items-center justify-between px-[50px] py-[12px] uppercase leading-[1.8]">
        <div className="font-['Arial'] text-[10px] tracking-[0.4em]">
          Enquire
        </div>
        <div className="text-[19px] tracking-[0.2em]">Renai</div>
        <button
          onClick={toggle}
          className="font-['Arial'] text-[10px] uppercase tracking-[0.4em]"
        >
          Menu
        </button>
        <aside
          className={`fixed top-0 z-10 h-screen w-screen bg-black text-white transition-all duration-500 ease-in-out ${open ? "left-0" : "left-full"}`}
        >
          <nav className="relative grid h-full w-full grid-cols-1 items-center justify-center lg:grid-cols-3">
            <button onClick={toggle} className="absolute right-12 top-8">
              <X size={40} />
            </button>
            <div className="flex h-full items-center justify-center">
              <span className="text-9xl font-thin uppercase lg:rotate-180 lg:[writing-mode:vertical-lr]">
                Menu
              </span>
            </div>
            <div className="col-span-1 flex h-full w-full items-center justify-center">
              <img
                src="https://placehold.co/600x900/?text=Image"
                alt="model"
                className="h-full object-cover"
              />
            </div>
            <div className="col-span-1 flex h-full flex-col items-center justify-center p-12">
              <ul className="space-y-4 border-l px-4 py-8 text-xl uppercase">
                <li>Home</li>
                <li>Portfolio</li>
                <li>The Experience</li>
                <li>Contact</li>
                <li>
                  <Instagram />
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Header;
