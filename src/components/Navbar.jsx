import { Link } from "react-router-dom";

function Navbar(handleShowTitle) {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-end">
        <div className="flex gap-8">
          {/* สร้าง Link เพื่อไปหน้า home ให้เป็นหน้าหลัก */}
          <Link
            onClick={() => handleShowTitle("React - Assessment")}
            to="/"
            className="text-black font-bold hover:text-gray-700"
          >
            Home
          </Link>
          {/* สร้าง Link เพื่อไปหน้า owner */}
          <Link
            to="/owner"
            className="text-black font-bold hover:text-gray-700"
          >
            Owner
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
