import React from 'react';
import './styles/global.css';
import { RouterProvider } from "react-router-dom";
import Routes from './routes';

function App() {
  return (
    <RouterProvider router={Routes} />
  );
}

export default App;
