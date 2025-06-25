import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { FaBook, FaUser, FaEnvelope, FaHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/FirebaseContext';
import { useEffect } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const AddBook = () => {
    //userInfo coming from firebaseAuth context
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  
  useEffect(() => {
    document.title = "LitShelf || AddBook";
  }, []);


    //Handle book submit
    const handleBookSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {upvote,...allData} = Object.fromEntries(formData.entries());
        const newUpvote = parseInt(upvote);
      allData.upvote = newUpvote;
      allData.reviewerPhoto = user?.photoURL;

        axiosSecure.post(`/books`, allData)
            .then(response => {
                if (response.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Book Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
            }).catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="container mx-auto min-h-screen p-6 pt-36 mb-28 max-w-3xl">
      <div className="bg-base-secondary dark:bg-darkBase-secondary shadow-lg rounded-lg overflow-hidden ">
        {/* Header */}
        <div className="bg-navy-blue p-6">
          <div className="flex items-center gap-3">
            <FaBook className="text-2xl text-bgBtn" />
            <h1 className="text-2xl font-bold">Add a New Book</h1>
          </div>
          <p className="mt-2 text-md">
            Share your favorite book with the community!
          </p>
        </div>

        {/* Form */}
         <form onSubmit={handleBookSubmit} className="p-6">
          <div className="space-y-5">
            {/* Book Title */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Book Title
              </label>
              <input
                type="text"
                name="book_title"
                placeholder="Enter book title"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-bgBtn"
              />
            </div>

            {/* Cover Photo URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Cover Photo URL
              </label>
              <input
                type="url"
                name="cover_photo"
                placeholder="Enter cover photo URL"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-bgBtn"
              />
            </div>

            {/* Total Pages */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Total Pages
              </label>
              <input
                type="number"
                name="total_page"
                placeholder="Enter total pages"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-bgBtn"
              />
            </div>

            {/* Book Author */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Book Author
              </label>
              <input
                type="text"
                name="book_author"
                placeholder="Enter author name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-bgBtn"
              />
            </div>

            {/* User Email (Read-Only) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  value={user.email}
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                />
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* User Name (Read-Only) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  value={user.displayName}
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                />
                <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Book Category */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Book Category
              </label>
              <select
                name="book_category"
                className="w-full dark:bg-darkBase-secondary p-3 border rounded-md focus:ring-2 focus:ring-bgBtn"
              >
                <option value="">Select a category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Fantasy">Fantasy</option>
              </select>
            </div>

            {/* Reading Status */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Reading Status
              </label>
              <select
                name="reading_status"
                className="w-full dark:bg-darkBase-secondary p-3 border rounded-md focus:ring-2 focus:ring-bgBtn"
              >
                <option value="">Select status</option>
                <option value="Read">Read</option>
                <option value="Reading">Reading</option>
                <option value="Want-to-Read">Want-to-Read</option>
              </select>
            </div>

            {/* Book Overview */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Book Overview
              </label>
              <textarea
                name="book_overview"
                placeholder="Enter book overview"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-bgBtn"
                rows="5"
              ></textarea>
            </div>

            {/* Likes (Read-Only) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Likes
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="upvote"
                  value={0}
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                />
                <FaHeart className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-bgBtn hover:bg-hoverBtn text-white px-6 py-3 rounded-md transition-colors"
              >
                Add Book
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;