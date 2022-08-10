import React from "react"
import './App.css';
import Blog from './Components/Blog'
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <div>
      <Blog/>
      <nav>
      </nav>
      <Outlet />
    </div>
  );
}

