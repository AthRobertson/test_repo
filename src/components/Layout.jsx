import React from 'react'
import {Link, Outlet} from "react-router-dom"


export default function Layout() {
  return (
    <>
        <header className="bg-black p-4 w-full text-white gap-3 flex items-center">
            <Link to="/">Counter</Link>
            <Link to="/todo-list">Todo List</Link>
            <Link to="/contact">Contact Us</Link>
        </header>
       
        <div>
            {/* page content */}
            <Outlet />
        </div>
    </>
    
  )
}
