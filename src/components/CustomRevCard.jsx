import React, { useEffect,useState } from 'react'
import { FaUser } from 'react-icons/fa6';
import { SlLike } from "react-icons/sl";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { Link } from 'react-router'
import category from '../utils/constants';
import { FaStar, FaWindowClose, FaThumbsUp, FaCommentAlt,FaComment  } from "react-icons/fa";

function CustomRevCard({ rev }) {
  const [displayReview, setDisplayReview] = React.useState(false);
  const createStars = (stars) => {
    const arr = [...Array(stars).keys()];
    return arr
  }

  const [likes, setLikes] = useState(rev?.likes || 0); // Initial likes from `rev`
  const [hasLiked, setHasLiked] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(rev?.comments || []); // Initial comments from `rev`

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setHasLiked(!hasLiked);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim()) {
      setComments([...comments, { user: "CurrentUser", text: commentInput }]); // Replace "CurrentUser" with logged-in user's name
      setCommentInput(""); // Clear input
    }
  };

  useEffect(() => {
    if (displayReview) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden"); 
    };
  }, [displayReview]);
  return (
    <div>
      <article id={rev.id} onClick={() => setDisplayReview(!displayReview)} className='p-4 flex flex-col hover:ring-1 gap-y-5 rounded-lg hover:scale-105 duration-300 bg-gray-700' key={rev.id}>

        <h1 className='flex gap-x-3 items-center'>
          {
            createStars(rev.rating).map(i => (
              <FaStar className='text-yellow-400' key={i} />
            ))
          }
          {
            createStars(5.0 - rev.rating).map(i => (
              <FaStar className='text-violet-400' key={i} />
            ))
          }
          <span className='text-white'>{rev.rating}.0</span>
        </h1>
        <img src={rev.img} alt="" className='p-1 rounded-lg max-h-44 hover:scale-105 duration-300 bg-gray-200 w-full' />
        <div className='flex gap-x-3 items-center cursor-pointer'>
          <FaUser className='text-2xl rounded-full' />
          <div className=''>
            <Link to={`/user-details/${rev.id}`} className='font-bold'>{rev.user}</Link>
          </div>
        </div>
        <h3 className='text-gray-400 italic font-serif'><span>{rev.date}</span> <br /> Category:<Link to={`/review/${rev.category}`} className='text-blue-500 hover:cursor-pointer'> {rev.category}</Link></h3>
        <p className='text-yellow-200 text-xl'>{rev.title}</p>
        <p className='text-gray-300'>{
          rev.review.length > 20 ?
            `${rev.review}
                ... 
              
              `
            : rev.review
        } <button className='text-gray-500'>continue</button></p>
        <div className='flex justify-between'>
          <button className='px-3 py-2 text-2xl'>
            <AiFillLike className='inline me-1' /> <span className='text-gray-400'>{rev.likes}</span>
          </button>
          <button className='hover:text-gray-50 duration-300'>{rev.comments.length + ' '}Comments <FaComment className='inline ms-1' /></button>
        </div>
      </article>

      {displayReview && (
        <div
          className="w-full absolute top-0 left-0 h-full bg-black/30"
          onClick={() => setDisplayReview(false)}
        >
          <aside
            className="fixed top-0 w-[500px] right-0 z-10 bg-gray-900 p-5 rounded-lg mt-1 me-1 h-full overflow-y-scroll"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
            role="dialog"
            aria-hidden={!displayReview}
          >
            <FaWindowClose
              onClick={() => setDisplayReview(false)}
              className="absolute right-5 top-5 text-4xl text-white hover:text-red-600 cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Close review"
            />
            <div className="py-5">
              <h1 className="text-white text-3xl">{rev?.title}</h1>
              <h1 className="flex gap-x-3 items-center">
                {createStars(rev.rating).map((i) => (
                  <FaStar className="text-yellow-400" key={i} />
                ))}
                {createStars(5.0 - rev.rating).map((i) => (
                  <FaStar className="text-violet-400" key={i} />
                ))}
                <span className="text-white">{rev.rating}.0</span>
              </h1>
              <div className="flex gap-x-3 items-center cursor-pointer pt-5">
                <FaUser className="text-2xl rounded-full" />
                <div className="flex gap-2 items-center">
                  <Link to={`/user-details/${rev.id}`} className="font-bold">
                    {rev.user}
                  </Link>
                  <h3 className="text-gray-400 italic font-serif">{rev.date}</h3>
                  <Link to={`/review/${rev.category}`} className="text-blue-500 hover:cursor-pointer">
                    {rev.category}
                  </Link>
                </div>
              </div>
              <div className="py-5">
                <img
                  src={rev.img}
                  alt=""
                  className="p-1 rounded-lg duration-300 bg-gray-200 w-full"
                />
              </div>
              <div className="p-4 rounded-lg bg-gray-200">
                <p>{rev.review}</p>
                <div className="flex gap-4 pt-5">
                  {/* Like Button */}
                  <button
                    className={`flex items-center gap-2 ${
                      hasLiked ? "text-blue-500" : "text-gray-700"
                    }`}
                    onClick={handleLike}
                  >
                    <FaThumbsUp className="text-xl" />
                    {likes} Likes
                  </button>

                  {/* Comment Button */}
                  <button className="flex items-center gap-2 text-gray-700">
                    <FaCommentAlt className="text-xl" />
                    {comments.length} Comments
                  </button>
                </div>
                <div className="pt-5">
                  <h3 className="text-gray-800 font-bold">Comments</h3>
                  <div className="space-y-2">
                    {comments.map((comment, index) => (
                      <div
                        key={index}
                        className="p-2 bg-gray-100 rounded-lg flex gap-2 items-start"
                      >
                        <FaUser className="text-gray-500" />
                        <div>
                          <h4 className="font-semibold">{comment.user}</h4>
                          <p>{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-3">
                    <input
                      type="text"
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      placeholder="Write a comment..."
                      className="flex-1 p-2 border rounded-lg"
                    />
                    <button
                      onClick={handleCommentSubmit}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default CustomRevCard