'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaEdit, FaUser } from 'react-icons/fa';
import { BsDisplay, BsFillCartFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { defineAbilitiesFor } from '../../lib/casl/ability'; 
import { Can } from '@casl/react';
import { createContextualCan } from '@casl/react';
import { createContext } from 'react';
const AbilityContext =createContext();

const Sidebar = () => {
  const [ability, setAbility] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) return;

    const user = JSON.parse(storedUser);
    console.log('User Role:', user.role); // Logs user role
    console.log('User Permissions:', user.role.permissions); // Logs user permissions
    
    // Pass the user permissions to the ability instance
    const abilityInstance = defineAbilitiesFor(user);
    setAbility(abilityInstance);  // Set the ability instance
  }, []);

  const CanComponent = createContextualCan(AbilityContext.Consumer);

  if (!ability) return null; // Ensure ability is loaded before rendering

  return (
    <>
      <AbilityContext.Provider value={ability}>
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
            <ul className="mt-4 flex flex-col gap-5 justify-center">
              <li>
                <Link href="/Admindashboard" className="text-white hover:underline text-lg font-semibold">
                  <FaHome className="inline-block mr-2" /> Home
                </Link>
              </li>

              <CanComponent I="create" a="Role">
                <li>
                  <Link href="/Admindashboard/createrole" className="text-white hover:underline text-lg font-semibold">
                    <BsDisplay className="inline-block mr-2" /> Create Role
                  </Link>
                </li>
              </CanComponent>

              <CanComponent I="manage" a="Role">
                <li>
                  <Link href="/Admindashboard/adduser" className="text-white hover:underline text-lg font-semibold">
                    <FaUser className="inline-block mr-2" /> Add User
                  </Link>
                </li>
              </CanComponent>
              <CanComponent I="manage" a="Role">
                <li>
                  <Link href="/Admindashboard/assignrole" className="text-white hover:underline text-lg font-semibold">
                    <FaUser className="inline-block mr-2" /> Assign Role
                  </Link>
                </li>
              </CanComponent>

              <CanComponent I="manage" a="Permission">
                <li>
                  <Link href="/Admindashboard/permission" className="text-white hover:underline text-lg font-semibold">
                    <BsFillCartFill className="inline-block mr-2" /> Manage Permission
                  </Link>
                </li>
              </CanComponent>
              <CanComponent I="create" a="Product">
          <li>
    <Link href="/Admindashboard/insertproduct" className="text-white hover:underline text-lg font-semibold">
      <FaEdit className="inline-block mr-2" /> Insert Product
    </Link>
  </li>
       </CanComponent>

       <CanComponent I="read" a="Product">
          <li>
    <Link href="/Admindashboard/displayproduct" className="text-white hover:underline text-lg font-semibold">
      <FaEdit className="inline-block mr-2" /> Display Product
    </Link>
  </li>
       </CanComponent>

       <CanComponent I="manage" a="Vendor">
          <li>
    <Link href="/Admindashboard/vendor" className="text-white hover:underline text-lg font-semibold">
      <FaEdit className="inline-block mr-2" /> Manage Vendor
    </Link>
  </li>
       </CanComponent>

            </ul>
          </div>
        </div>
        {isOpen ? <div className="ml-64"></div> : null}
      </AbilityContext.Provider>
    </>
  );
};

export default Sidebar;

