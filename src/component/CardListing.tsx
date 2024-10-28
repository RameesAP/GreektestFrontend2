import {
  Card,
  CardContent,
  //   CardFooter,
  CardHeader,
  //   CardTitle,
} from "@/components/ui/card.js";
import updown from "../assets/Frame.png";
import filter from "../assets/filter.png";
import timer from "../assets/cardsimages/timer.png";
import { travelData, TravelPackage } from "../data/places.ts";
import { Button } from "@/components/ui/button.js";
import { MdFlightLand } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const CardListing = () => {
  const [likedCards, setLikedCards] = useState<boolean[]>(
    Array(travelData.length).fill(false)
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleToggle = (index: number) => {
    setLikedCards((prevLikedCards) => {
      const newLikedCards = [...prevLikedCards];
      newLikedCards[index] = !newLikedCards[index];
      return newLikedCards;
    });
  };
  const filteredData = travelData.filter((packageData: TravelPackage) =>
    packageData.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full w-full ">
      <div className="flex justify-between sm:px-6 ">
        <div className="">
          <input
            className="h-[35px] border border-gray-300 rounded-md shadow-lg"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <div className="  flex rounded-md shadow-lg p-2 gap-2 hover:cursor-pointer">
            <img className="w-[25px] h-[25px]" src={updown} alt="updown" />
            <span>Sort by</span>
          </div>
          <div className=" flex rounded-md shadow-lg p-2 gap-2 hover:cursor-pointer">
            <img className="w-[25px] h-[25px]" src={filter} alt="filter" />
            <span>filter</span>
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredData.map((packageData: TravelPackage, index: number) => (
            <Card key={index} className="max-w-sm w-full mx-auto shadow-lg">
              <CardHeader className="p-0">
                <div className="relative p-4">
                  <img
                    src={packageData.image}
                    alt={packageData.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    onClick={() => handleToggle(index)}
                    variant="ghost"
                    size="icon"
                    className="absolute top-6 right-6 bg-white rounded-lg p-1.5 hover:bg-white"
                  >
                    {likedCards[index] ? (
                      <FaHeart className="h-5 w-5 text-red-500" /> // Filled heart, red
                    ) : (
                      <FaRegHeart className="h-5 w-5 text-black" /> // Outline heart, black
                    )}
                  </Button>
                  <div className="absolute bottom-4 right-8 bg-white rounded-t-lg px-2 py-1 text-xs font-semibold flex items-center">
                    <img
                      className="w-[20px] h-[20-px] mr-1"
                      src={timer}
                      alt="timer"
                    />
                    {packageData.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4  ">
                <h2 className="text-lg font-semibold mb-2">
                  {packageData.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2 flex items-center">
                  <MdFlightLand className="text-red-500 mr-2 w-[16px] h-[16px]" />
                  Pickup: Cochin Airport / Railway Station
                </p>
                <div className=" w-full flex justify-between ">
                  <div className="">
                    <div className="text-sm">Start at</div>
                    <div className="flex items-baseline">
                      <span className="text-sm text-gray-500 line-through mr-2">
                        ₹32,579
                      </span>
                      <span className="text-2xl font-bold">₹25,800</span>
                      <span className="text-xs text-gray-500 ml-1">*</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      *Excluding all taxes
                    </p>
                  </div>
                  <div className="  flex items-center justify-center">
                    <Button className="w-[145px] h-[48px] bg-red-600 hover:bg-red-700 text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
              {/* <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  View Details
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardListing;
