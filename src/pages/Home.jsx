import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Generation Thailand
            <br />
            React - Assessment
          </h1>
        </div>

        <div className="flex justify-center gap-8">
          {/* สร้าง Link เพื่อไปหน้า user */}
          <Link
            to="/user"
            className="bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="font-bold">User Home Sector</span>
          </Link>
          {/* สร้าง Link เพื่อไปหน้า admin */}
          <Link
            to="/admin"
            className="bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="font-bold">Admin Home Sector</span>
          </Link>
        </div>
      </main>
      {/* ใช้เพื่อแสดงผลของหน้าอื่นๆ ที่ตรงกับเส้นทางที่ถูกกำหนดไว้ใน Route */}
      <Outlet />
    </div>
  );
}
