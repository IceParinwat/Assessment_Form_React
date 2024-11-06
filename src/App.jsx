import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Owner from "./pages/Owner";
import { useState } from "react";

function App() {
  // สร้าง adminData ให้เก็บข้อมูลผู้ใช้งาน
  const [adminData, setAdminData] = useState([
    { id: 0, name: "mock", lastName: "mocklastname", position: "Manager" },
    { id: 1, name: "employee 1", lastName: "em", position: "Engineer" },
    { id: 2, name: "employee 2", lastName: "lord", position: "Designer" },
  ]);

  const [title, setTitle] = useState("React - Assessment");

  const handleShowTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <BrowserRouter>
      {/* เรียกใช้ component Navbar จะติดไปทุกหน้าของทุก Route */}
      <Navbar handleShowTitle={handleShowTitle} />

      <Routes>
        {/* กำหนดเส้นทางให้ Route Home เป็น Parent */}
        <Route
          path="/"
          element={<Home title={title} handleShowTitle={handleShowTitle} />}
        >
          {/* กำหนดเส้นทางให้ Route admin เป็น children ของ Home */}
          <Route
            path="admin"
            element={
              <Admin
                title={title}
                adminData={adminData}
                setAdminData={setAdminData}
              />
            }
          />
          {/* กำหนดเส้นทางให้ Route user เป็น children ของ Home */}
          <Route
            path="user"
            element={<User title={title} adminData={adminData} />}
          />
        </Route>

        {/* กำหนดเส้นทางให้ Route Owner */}
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
