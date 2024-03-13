import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 bg-gray-400 p-4">
      <div className="bg-purple-300 rounded-xl mb-4">
        <h3 className="text-center text-3xl text-white p-4">Reading Time : {readingTime}</h3>
      </div>
      <h2 className="text-3xl text-center">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark , idx) => (
        <Bookmark  key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;
