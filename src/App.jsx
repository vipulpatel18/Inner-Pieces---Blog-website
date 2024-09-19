import React from 'react'
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Layout from './pages/Layout';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Layout/>,
      children:[
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/about",
          element:  <About/>,
        },
        {
          path: "/blog",
          element:  <Blog/>,
        },
        {
          path: "/gallery",
          element:  <Gallery/>,
        },
        {
          path: "/contact",
          element:  <Contact/>,
        }
      ]
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={router} />
     
    </div>
  )
}
