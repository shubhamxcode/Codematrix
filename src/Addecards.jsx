import { useSelector } from "react-redux";
import Carousel from "./Resuable/Carousel";
import { useActionData } from "react-router";

const AddedCardsHeader = () => {
    const totalcards=useSelector((state)=>state.favorites.items.length)
    return (
      <div className=" ">
        <div className="flex justify-between items-center bg-gray-500 shadow-lg rounded-lg max-w-sm mx-auto p-4">
          <h3 className="text-lg  font-semibold text-gray-700">Added Cards</h3>
          <div className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full">
            {totalcards}
          </div>
        </div>
        <div className="bg-slate-700 mt-2 max-w-screen-md mx-auto rounded-xl text-center">
            
        </div>
      </div>
    );
  };
  
  export default AddedCardsHeader;
  