
import { useEffect } from "react";
import { useState } from "react";
import Book from "../components/bookshelf/Book";
import Loading from "../components/common/Loading";
import BooksNotFound from "../components/common/BooksNotFound";
import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";

const Bookshelf = () => {
  const [bookShelfLoading, setBookShelfLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]); 
  const [filteredBooks, setFilteredBooks] = useState([]); 
  const [query, setQuery] = useState(""); 

  useEffect(() => {
      document.title = "LitShelf || BookShelf";
    }, []);
  
  useEffect(() => {
    axios(`${import.meta.env.VITE_baseURL}/books`).then((res) => {
      setAllBooks(res.data);
      setFilteredBooks(res.data); 
      setBookShelfLoading(false);
    });
  }, []);
  
  const updatedBooks = filteredBooks.filter(
    (book) =>
      book.book_title?.toLowerCase().includes(query.toLowerCase()) ||
      book.book_author?.toLowerCase().includes(query.toLowerCase())
  );
  const handleFilter = (status) => {
    if (status === "") {
      setFilteredBooks(allBooks);
    } else {
      const filter = allBooks.filter((book) => book.reading_status === status);
      setFilteredBooks(filter);
    }
  };


  if (bookShelfLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto min-h-screen pt-36 mb-28 p-4">
      {
        allBooks?.length === 0 ? <BooksNotFound></BooksNotFound>
      :
      <>
      {/* Bookshelf search bar for mobile device */}
      <div className=" flex md:hidden">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e)=>setQuery(e.target.value.toLowerCase())}
          className="w-full px-4 py-2 pl-10  text-gray-700 dark:text-gray-200 bg-base-secondary dark:bg-darkBase-secondary border rounded-full focus:outline-none focus:ring-2 focus:ring-InputRing focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Bookshelf headers */}
      <div className="flex justify-between my-5 items-center">
        {/* Bookshelf filter */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Bookshelf</h1>
        </div>
        {/* Bookshelf search bar */}
        <div className="hidden md:flex md:flex-1">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e)=>setQuery(e.target.value.toLowerCase())}
            className="w-full px-4 py-2 pl-10 text-gray-700 dark:text-gray-200 bg-base-secondary dark:bg-darkBase-secondary border rounded-full focus:outline-none focus:ring-2 focus:ring-InputRing focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Filtering option  */}
        <div className="flex-1 flex justify-end">
          <select
            defaultValue=""
            name="Filter"
            onChange={(e)=>{handleFilter(e.target.value)}}
            className="w-[150px] dark:bg-darkBase-secondary border rounded-md">
            <option value="" disabled> 
              Filter by
            </option>
            <option value="Read">
              Read
            </option>
            <option value="Reading">
              Reading
            </option>
            <option value="Want-to-Read">
              Want-to-Read
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        {updatedBooks.map((book) => (
          <Book key={book._id} book={book}></Book>
        ))}
      </div>
      </>}
    </div>
  );
};

export default Bookshelf;
