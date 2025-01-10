import Navbutton from "@/components/Navbutton";
import { HomeIcon, File, UserRound } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between border-b-2 border-gray-300 py-3 px-2">
        <div className="flex items-center gap-2">
          <Navbutton Icon={HomeIcon} label="Home" href="/home" />
          <h1 className="font-semibold text-xl">Computer Repair Shop</h1>
        </div>
        <div className="flex items-center">
          <Navbutton Icon={File} label="File" href="/tickets" />
          <Navbutton Icon={UserRound} label="User" href="/customers" />
        </div>
      </div>
    </header>
  );
};

export default Header;
