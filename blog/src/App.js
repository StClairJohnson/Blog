import React from "react"
import './App.css';
import Blog from './Components/Blog'
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Blog/>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

