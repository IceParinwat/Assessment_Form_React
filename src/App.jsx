import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Owner from "./pages/Owner";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // สร้าง adminData ให้เก็บข้อมูลผู้ใช้งาน
  const [adminData, setAdminData] = useState([]);
  const [title, setTitle] = useState("React - Assessment");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setAdminData(response.data);
        setLoading(false);
      } catch (err) {
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล: " + err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">กำลังโหลดข้อมูล...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

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
