/* eslint-disable react/prop-types */
import { FaCircleUser } from "react-icons/fa6";
import Likes from "../assets/Likes.png"
import Comment from "../assets/Comment.png"
import Share from "../assets/Share.png"
import CommentLike from "../assets/CommentLike.png"

function QuotesCard({quote, isLiked, onClick }) {
    
    if(!quote) return null;
    const {author, content, tags } = quote
    
  return (
    <>
        <div className="border-l-2 border-b-2 border-r-2 border-gray-800 p-2 flex justify-start items-start gap-3">
            <div className="flex justify-center items-start py-1">
                <FaCircleUser className="text-4xl text-white/85"/>
            </div>
            <div>
            <div className="">
                <h3 className="mb-2 text-lg font-semibold">{author}</h3>
                <p className="my-2 text-bases text-white/80">{content}</p>
            </div>
                <div className="flex justify-start items-center gap-3 my-3">
                    {isLiked ? 
                    <button
                        onClick={onClick}
                    >
                        <img src={CommentLike} alt="Liked" />
                    </button> 
                    
                    : <button onClick={onClick}><img src={Likes} alt="Like" /></button>}

                    <button><img src={Comment} alt="Comment" /></button>
                    <button><img src={Share} alt="Share" /></button>
                </div>
                <div >
                    <p className="text-sm  text-[#616161]">{tags.join(" · ")}</p> 
                </div>
            </div>
    
        </div>  
    </>
  )
}

export default QuotesCard;