import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMArkAsRead = (time, id) => {
    // console.log('mark as read' , time);
    const newReadingTime = readingTime + parseInt(time);
    setReadingTime(newReadingTime);
    console.log("remove bookmark ", id);
    const remainigBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainigBookmarks);
  };

  const handleToAddBookmarks = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex container mx-auto gap-4 mt-7">
        <Blogs
          handleToAddBookmarks={handleToAddBookmarks}
          handleMArkAsRead={handleMArkAsRead}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
