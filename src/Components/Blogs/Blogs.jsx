import PropTypes from "prop-types";

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleToAddBookmarks, handleMArkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h3 className="text-4xl">Blogs : {blogs.length}</h3>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleToAddBookmarks={handleToAddBookmarks}
          handleMArkAsRead={handleMArkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleToAddBookmarks: PropTypes.func.isRequired,
  handleMArkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
