/* eslint-disable react/prop-types */
import { FaCreditCard } from "react-icons/fa";

const TcCard = ({ title, description, icon: Icon, rating }) => {
  return (
    <div className="flex items-center justify-center rounded-4xl border-green-400 border- bg-[#082C3F] my-12">
      <div className="  text-white  p-8 w-full max-w-6xl shadow-lg relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#062828] p-4 rounded-full border-2 border-blue-400">
          {/* {Icon ? Icon : <FaCreditCard className="text-green-400 text-4xl" />} */}
          {<FaCreditCard className="text-green-400 text-4xl w-16 h-16 p-2" />}
        </div>
        <div className="mt-8 mx-24 text-center">
          <h2 className="text-xl font-bold text-gray-300">{title}</h2>
          <div className="flex justify-center mt-2">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg mx-1">
                ★
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-200 font-semibold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TcCard;
