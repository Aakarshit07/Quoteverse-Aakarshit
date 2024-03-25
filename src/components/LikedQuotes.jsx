import { useDispatch, useSelector } from 'react-redux';
import QuotesCard from '../components/QuotesCard';
import { toggleLike } from '../features/quotesSlice';
import { Link } from 'react-router-dom';
import  Home from "../assets/Home.png";
import  LikeFill from "../assets/LikeFill.png";

function LikedQuotes() {

    const dispatch = useDispatch();
    const likedQuotes = useSelector((state) => state.quotes.likedQuotes)
    const quotes = useSelector((state) => state.quotes.quotes)
    const handleUnlike = (quoteId) => {
      dispatch(toggleLike(quoteId));
    };

    return (
    <div className='bg-black text-white'>
        <div>
          <div className="flex justify-around items-center sm:p-4 border-b-2 border-gray-800">
            <Link to="/" className=""><img src={Home} alt="Home" /></Link>
            <h2>Liked Quotes</h2>
            <Link to="/likedquotes"><img src={LikeFill} alt="Liked" /></Link>
          </div>
        </div>
       <div className='flex justify-center items-center'>
        <ul>
          {likedQuotes.length > 0 ? (
            likedQuotes.map((quoteId) => (
              <QuotesCard
                key={quoteId}
                quote={quotes.find((quote) => quote._id === quoteId)}
                // Pass isLiked as true for liked quotes
                isLiked={true} 
                //  onLikeClick to handle toggling likes in LikedQuotes as well
                onClick={() => handleUnlike(quoteId)} 
              />
            ))
          ) : (
            <p>You haven&apos;t liked any quotes yet.</p>
          )}
        </ul>
       </div>
    </div>
  )
}

export default LikedQuotes;
