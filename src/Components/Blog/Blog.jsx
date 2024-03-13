import { PiBookmarkSimpleThin } from "react-icons/pi";
import PropTypes from "prop-types";
const Blog = ({ blog, handleToAddBookmarks ,handleMArkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    hashtags,
    posted_date,
    author_img,
    reading_time,
  } = blog;
  console.log(blog);
  return (
    <div className="my-10 space-y-2">
      <img
        className=""
        src={cover}
        alt={`Cover picture of the title${title}`}
      />
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-4 items-center">
          <img
            className="size-16 rounded-full object-cover"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            className="text-red-600 text-2xl ml-2"
            onClick={() => handleToAddBookmarks(blog)}
          >
            <PiBookmarkSimpleThin></PiBookmarkSimpleThin>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <button 
      onClick={()=>handleMArkAsRead(reading_time , id)}
      className="text-cyan-800 font-bold underline">Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleToAddBookmarks: PropTypes.func.isRequired,
  handleMArkAsRead: PropTypes.func.isRequired,

};

export default Blog;
