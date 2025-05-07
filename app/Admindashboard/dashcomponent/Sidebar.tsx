'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaEdit, FaUser } from 'react-icons/fa';
import { BsDisplay, BsShop, BsFillCartFill } from 'react-icons/bs';
import { MdOutlineRequestPage } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 text-white bg-[#212529] p-2 rounded"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div
        className={`absolute top-0 left-0 h-screen w-64 bg-[#212529] p-4 mt-18 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ marginRight: isOpen ? 0 : '64px' }}
      >
        <div className="flex bg-[#212529] flex-col">
          <ul className="mt-4 flex flex-col gap-5 justify-center ">
            <li>
              <Link href="/Admindashboard" className="text-white hover:underline text-lg font-semibold">
                <FaHome className="inline-block mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link href="/Admindashboard/createrole" className="text-white hover:underline text-lg font-semibold">
                <BsDisplay className="inline-block mr-2" /> Create Role
              </Link>
            </li>

            <li>
              <Link href="/Admindashboard/adduser" className="text-white hover:underline text-lg font-semibold">
                <CiSearch className="inline-block mr-2" /> Add User
              </Link>
            </li>
            <li>
              <Link href="/Admindashboard/assignrole" className="text-white hover:underline text-lg font-semibold">
                <CiSearch className="inline-block mr-2" /> Assign Role
              </Link>
            </li>

            <li>
              <Link href="/Admindashboard/permission" className="text-white hover:underline text-lg font-semibold">
                <BsFillCartFill className="inline-block mr-2" />Manage Permission
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen ? <div className="ml-64"></div> : null}
    </>
  );
};

export default Sidebar;
