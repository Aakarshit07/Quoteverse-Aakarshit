import { useDispatch } from "react-redux";
import Hamburger from "../assets/Hamburger.png"
import { IoSettingsOutline } from "react-icons/io5";
import { setFilterByTag } from "../features/quotesSlice";

function TrendingTopics() {
    const dispatch = useDispatch();

    const handleTagClick = (tag) => {
        dispatch(setFilterByTag(tag));
    };

    return (
        <div className="bg-black text-white">
            <div className="hidden md:flex justify-end items-center p-[1.44rem] md:border-b-2 border-gray-800">
                <img src={Hamburger} alt="HamBurger" />
            </div>
            <div className="flex-row justify-center items-center p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-semibold">Trending Topics</h1>
                    <IoSettingsOutline  className="text-[#616161] text-xl"/>
                </div>
                <div className="my-3">
                <button className="text-blue-400" onClick={() => handleTagClick(null)}>show all quotes</button> 
                </div>
                <div className="flex flex-col justify-between items-start gap-5">
                    <div>
                        <p className="text-[#616161]">Wisdom</p>
                        <button onClick={()=>handleTagClick("Famous Quotes")}>#famousQuotes</button>
                        <p className="text-[#616161]">123 quotes</p>
                    </div>
                    <div>
                        <p className="text-[#616161]">Success</p>
                        <button onClick={()=>handleTagClick("Success")}>#Success</button>
                        <p className="text-[#616161]">93 quotes</p>
                    </div>
                    <div>
                        <p className="text-[#616161]">Technology</p>
                        <button onClick={()=>handleTagClick("Technology")}>#technology</button>
                        <p className="text-[#616161]">85 quotes</p>
                    </div>
                    <div>
                        <p className="text-[#616161]">GAMES</p>
                        <button onClick={()=>handleTagClick("Games")}>#games</button>
                        <p className="text-[#616161]">69 quotes</p>
                    </div>
                    <div>
                        <p className="text-[#616161]">Wisdom</p>
                        <button onClick={()=>handleTagClick("Wisdom")}>#wisdom</button>
                        <p className="text-[#616161]">45 quotes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingTopics