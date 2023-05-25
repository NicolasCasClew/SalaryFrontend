import * as React from "react";
//import { Routes, Route } from 'react-router-dom';
import SalaryContent from "./SalaryContent";
import DBContent from "./DBContent";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SalaryOutDTO } from "./salaryOut.model";

export default function App() {
  const [receivedData, setReceivedData] = useState<SalaryOutDTO | null>(null);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<SalaryContent setReceivedData={setReceivedData} />}
        />{" "}
        {/*sendObject={sendObjectToDBContent}  */}
        <Route path="admin" element={<DBContent />} />
      </Routes>
    </div>
  );
}
