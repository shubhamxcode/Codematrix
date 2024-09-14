import { useDispatch, useSelector } from "react-redux";
import { removetofav } from "./Feature/addtofav/Addtofav";
import { Link } from "react-router-dom";

const AddedCardsHeader = () => {
  const totalcards = useSelector((state) => state.favorites.items.length);
  const displaycards = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between items-center bg-gray-500 shadow-lg rounded-lg max-w-sm mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-700">Added Cards</h3>
        <div className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full">
          {totalcards}
        </div>
      </div>
      <div  className="flex flex-wrap">
        {displaycards.map((card) => (
          <div key={card.id} className="m-4">
            <Link to={card.to} className="cursor-pointer bg-black border border-gray-700 shadow-lg p-6 rounded-lg hover:bg-green-700 hover:shadow-xl m-4 w-96 h-80 flex flex-col items-center justify-center text-center transition-transform  transform hover:scale-110">
              <div className="text-5xl text-white mb-4">
                {/* image */}
              </div>
              <h1 className="font-bold text-green-500 mb-2">{card.title}</h1>
              <p className="font-semibold text-white">{card.description}</p>
            </Link>
            <div className=" flex justify-center">
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4  rounded hover:bg-blue-700 transition duration-300"
                onClick={() => dispatch(removetofav(card.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddedCardsHeader;