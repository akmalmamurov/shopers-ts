import { FaClockRotateLeft, FaWallet } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { PiChats } from "react-icons/pi";

const data = [
  {
    title: "Free delivery",
    description: "When ordering above $500",
    icon: <GoRocket />,
  },
  {
    title: "90 Days Return",
    description: "If goods have problems",
    icon: <FaClockRotateLeft />,
  },
  {
    title: "Secure Payment",
    description: "100% secure payment",
    icon: <FaWallet />,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support",
    icon: <PiChats />,
  },
];
const Facilities = () => {
  return <div>Facilities</div>;
};

export default Facilities;
