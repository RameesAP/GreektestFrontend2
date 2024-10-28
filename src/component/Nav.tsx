import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "../assets/Mask group.png";
// import Bell from "../assets/notification.svg";
// import Bell from "../assets/notification.png";
import { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { GoBell } from "react-icons/go";

import { AiFillBell } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";

import profileIcon from "../assets/Ellipse 346.png";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <div className="text-2xl font-bold  w-[235px] h-[48.55px] ">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="flex items-center">
        <nav className="hidden md:flex ml-6">
          <a
            href="#"
            className="font-medium text-black hover:text-red-500 mr-4"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium text-black hover:text-red-500 mr-4"
          >
            International Packages
          </a>
          <a
            href="#"
            className="font-medium text-black hover:text-red-500 mr-4"
          >
            India Packages
          </a>
          <a
            href="#"
            className="font-medium text-black hover:text-red-500 mr-4"
          >
            Talk to Us
          </a>
          <div>
            {isClicked ? (
              <AiFillBell
                className="mr-4 hover:cursor-pointer w-[23px] h-[23px] text-blue-500 "
                onClick={handleIconClick}
              />
            ) : (
              <AiOutlineBell
                className="mr-4 hover:cursor-pointer w-[23px] h-[23px]"
                onClick={handleIconClick}
              />
            )}
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                International Packages
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                India Packages
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Talk to Us
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <Avatar className="ml-4">
          <AvatarImage src={profileIcon} alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Nav;
