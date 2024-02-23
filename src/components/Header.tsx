/* eslint-disable @next/next/no-img-element */
import { Instagram, X } from "lucide-react";
import { cn } from "~/utils/cn";

type HeaderProps = { open: boolean; toggle: () => void };

const Header = ({ open, toggle }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-white">
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
          className={cn(
            "absolute top-0 z-20 h-max min-h-screen w-screen bg-black text-white transition-all duration-500 ease-in-out lg:h-full",
            open ? "left-0" : "left-full",
          )}
        >
          <nav className="relative grid h-full w-full grid-cols-1 items-center justify-center lg:grid-cols-3">
            <button onClick={toggle} className="absolute right-16 top-4 z-30">
              <X size={40} strokeWidth={1} />
            </button>
            <div className="hidden h-full items-center justify-center lg:flex">
              <span className="text-9xl font-thin uppercase lg:rotate-180 lg:[writing-mode:vertical-lr]">
                Menu
              </span>
            </div>
            <div className="col-span-1 flex h-screen w-full items-center justify-center opacity-50 lg:opacity-100">
              <img
                src="https://placehold.co/600x900/?text=Image"
                alt="model"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute col-span-1 flex h-full w-full flex-col items-center justify-center p-12 lg:static">
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
