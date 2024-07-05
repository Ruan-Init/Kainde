import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from "./router/About";
import Navbar from "./components/Navbar/Navbar";
import Services from "./router/Services";
import Contact from "./router/Contact";

const router = createBrowserRouter([
  
 {
  path: "/",
  element: <App/>,
 },
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Services",
    element: <Services/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);