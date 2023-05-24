import * as React from "react";
//import { Routes, Route } from 'react-router-dom';
import SalaryContent from "./SalaryContent";
import DBContent from "./DBContent";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SalaryContent />} />
        <Route path="admin" element={<DBContent />} />
      </Routes>
    </div>
  );
}
