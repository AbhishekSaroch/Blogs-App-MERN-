import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center border 2px h-[50px]">
      <div className="cursor-pointer">All Blogs</div>
      <div className="cursor-pointer">Create Blog</div>
    </div>
  );
};

export default Navbar;
