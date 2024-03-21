import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Phones from './Components/Phones/Phones.jsx';
import Phone from './Components/Phones/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:5000/phones')
      },
      {
        path: '/phone/:id',
        element: <Phone></Phone>,
        loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
