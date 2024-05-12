import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Update from './Update.jsx';
import Add from './Add.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/update/:id',
    element: <Update></Update>,

    
  },
  {
    path: "/add",
    element: <Add></Add>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div className=''>
<React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
</div>
)
