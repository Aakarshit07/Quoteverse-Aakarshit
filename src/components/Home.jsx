import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes, toggleLike, setFilterByTag } from '../features/quotesSlice.js';
import { GoHomeFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import QuotesCard from "./QuotesCard";
import UserProfile from "./UserProfile.jsx"
import TrendingTopics from "./TrendingTopics.jsx"

function Home() {

    const dispatch = useDispatch();
    const quotes = useSelector((state)=> state.quotes.quotes)
    const likedQuotes = useSelector((state) => state.quotes.likedQuotes);
    const filteredByTag = useSelector((state)=> state.quotes.filteredByTag);

    useEffect(() => {
        dispatch(fetchQuotes())
        return () => {
            dispatch(setFilterByTag(null))
        }
    }, [dispatch]);

    const handleLike = (quoteId) => {
        dispatch(toggleLike(quoteId));
    };
    
    const handleFilterClick = (tag) => {
        dispatch(setFilterByTag(tag));
    };

    const  filteredQuotes = filteredByTag
    ? quotes.filter((quotes) => quotes.tags.includes(filteredByTag)) 
    : quotes

    return (
    <div className="flex justify-center items-start px-4 md:p-2">
        <div className="hidden md:block md:w-1/3">
            <UserProfile />
        </div>
        <div className="bg-black text-white">
            <div className="flex justify-around items-center p-4 border-r-2 border-b-2 border-l-2 border-gray-800">
                <Link to="/" className=""><GoHomeFill className="text-2xl"/></Link>
                <Link to="/likedquotes"><FaRegHeart className="text-2xl"/></Link>
            </div>
            <div>
                {filteredQuotes.map((item)=>(
                    <QuotesCard
                        key={item._id} 
                        quote={item}
                        isLiked={likedQuotes.includes(item._id)}
                        onClick={() => handleLike(item._id)}
                    />
                ))}
            </div>
        </div>
        <div className="md:block md:w-1/3">
            <TrendingTopics onClick={handleFilterClick} />
        </div>
    </div>
  )
}

export default Home;