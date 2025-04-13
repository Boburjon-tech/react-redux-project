import { useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout';
import Producte from './pages/Producte';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {loader as HomeLoader} from "./pages/Home";
import {loader as ProductLoader} from "./pages/Producte"

function App() {
  const routes = createBrowserRouter([
    {
      path : "/",
      element: <MainLayout/>,
      children: [
        {index: true,
          element: <Home/>,
          loader:HomeLoader,
        },
        {
          path: "/about",
          element:<About/>
        },
        {
          path: "/contact",
          element:<Contact/>,
        },
        {
          path: "/producte/:id",
          element : <Producte/>,
          loader:ProductLoader,
        }
      ]
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App;