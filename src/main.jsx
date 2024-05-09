import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EventosAlmacenados from './components/EventosAlmacenados.jsx';
let router = createBrowserRouter([
    {
      path: "/EventosAlmacenados",
      element: <EventosAlmacenados />,
    },
    {
      path: "/",
      element: <App/>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
