import location from "../assets/Frame 317.png";
import calender from "../assets/Frame 319.png";
import people from "../assets/Frame 322.png";

const SecOptions = () => {
  return (
    <div className="bg-[#F1F1F1] shadow p-4 sm:p-6 mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center w-full max-w-md h-20 bg-white rounded-md p-2">
          <div className="flex items-center">
            <img className="w-9 h-9" src={location} alt="location" />
            <div className="ml-5">
              <div className="font-bold text-lg">Munnar</div>
              <div className="font-extralight text-sm">47 Packages</div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md h-20 bg-white border rounded-md p-2">
          <div className="flex items-center">
            <img className="w-9 h-9" src={calender} alt="calendar" />
            <div className="ml-5">
              <div className="font-bold text-lg">11 Aug 2023</div>
              <div className="font-extralight text-sm">Wednesday</div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md h-20 bg-white border rounded-md p-2">
          <div className="flex items-center">
            <img className="w-9 h-9" src={people} alt="people" />
            <div className="ml-5">
              <div className="font-bold text-lg">2 Adults, 1 Child</div>
              <div className="font-extralight text-sm">1 Room</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-md h-20 bg-[#DB2D2E] font-semibold text-white rounded-md p-2">
          Update Search
        </div>
      </div>
    </div>
  );
};

export default SecOptions;
