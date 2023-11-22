import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Services from './components/Services.jsx';
import OurWork from './components/OurWork.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/services",
    element: <Services></Services>
  },
  {
    path: "/ourwork",
    element: <OurWork></OurWork>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
