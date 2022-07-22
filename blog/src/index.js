import ReactDOM from "react-dom/client";
import {
  BrowserRouter ,
  Routes ,
  Route
    } from "react-router-dom";
import App from "./App";
import Expenses from "./Components/expenses";
import Invoices from "./Components/invoices";
import Profits from "./Components/profits"

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="profits" element={<Profits />} />
    </Routes>
  </BrowserRouter>
);