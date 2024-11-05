import { facilitiesData } from "@/data";
import { FaClockRotateLeft, FaWallet } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { PiChats } from "react-icons/pi";

const iconMap = {
  GoRocket: <GoRocket />,
  FaClockRotateLeft: <FaClockRotateLeft />,
  FaWallet: <FaWallet />,
  PiChats: <PiChats />,
} as const;

type IconKey = keyof typeof iconMap;

const Facilities = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {facilitiesData.map((item) => (
        <div
          key={item?.title}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <span className="text-3xl text-lightOrange">
            {iconMap[item?.icon as IconKey]}
          </span>
          <div className="text-center sm:text-left">
            <h2 className="uppercase font-bold">{item?.title}</h2>
            <p className="text-sm text-lightText">{item?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
