import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="flex justify-between items-center h-[70px] px-8 shadow-sm bg-gray-100">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        Bloggerly
      </Link>

      <div className="flex items-center space-x-6">
        {token === null && (
          <>
            <Link to="/signup" className="btn-secondary">
              Sign up
            </Link>
            <Link to="/login" className="btn-secondary">
              Log in
            </Link>
          </>
        )}

        {token !== null && (
          <>
            <Link to="/createBlog" className="text-gray-800 hover:text-gray-600">
              Create Blogs
            </Link>
            <Link to="/myBlogs" className="text-gray-800 hover:text-gray-600">
              My Blogs
            </Link>
            <Logout />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
