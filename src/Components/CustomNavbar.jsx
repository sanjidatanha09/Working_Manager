"use client";

import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-blue-600 h-12 py-2 px-3 ">
      <div className="grid grid-cols-3 justify-between">
        <div>
          <h1>logo and task manager</h1>
        </div>
        <div className="flex items-center justify-between gap-4 font-bold">
          <Link href="/">Home</Link>
          <Link href="/add-task">Add Task</Link>
          <Link href="/show-task">Show Task</Link>
        </div>
        <div className="flex items-center justify-end gap-4 font-bold">
          <Link href="/signup">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
