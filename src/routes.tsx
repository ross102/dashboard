import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout"
import Dashboard from './pages/admin/Dashboard';

const Routes = createBrowserRouter([
    {
        path: "/",
        // element: <LandingPage />,
      },
      {
        element: <Layout />,
        //loader: rootLoader,
        children: [
          {
            path: "/admin/dashboard",
            element: <Dashboard />
          },
        ]
      }
])

export default Routes;