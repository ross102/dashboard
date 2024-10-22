import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout"

//admin
import Dashboard from './pages/admin/Dashboard';
import Visitors from "./pages/admin/Visitors"
import UserManagement from './pages/admin/UsersTable';

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
          {
            path: "/admin/visitors",
            element: <Visitors />
          },
          {
            path: "/admin/user-management",
            element: <UserManagement />
          },
        ]
      }
])

export default Routes;