import React from "react"
import { Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../src/App.css';
import { Topmenu } from "./components/Top_menu/Top_menu";
import { NavigationMenu } from "./components/Navigation_menu/Navigation_menu";
import { ComingPage } from "./Pages/Coming/Coming";
import { AppRoutes } from "./components/Routes/Routes";

export function App() {
  return (
    <div className="page">
      <Topmenu/>
      <main className="d-flex">
      <AppRoutes />
      </main>
    </div>
  )
};