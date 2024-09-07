import { useSelector } from "react-redux";

const AddedCardsHeader = () => {
    const totalcards=useSelector((state)=>state.favorites.items.length)
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm mx-auto mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">Added Cards</h3>
          <span className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full">
            {totalcards}
          </span>
        </div>
        
      </div>
    );
  };
  
  export default AddedCardsHeader;
  