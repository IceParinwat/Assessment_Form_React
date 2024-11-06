/* eslint-disable react/prop-types */
import { useState } from "react";

// รับ props adminData และ setAdminData มาจาก App
export default function Admin({ adminData, setAdminData }) {
  // กำหนดค่าเริ่มต้นของ state ของผู้ใช้เป็นค่าว่าง
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  // สร้าง State เมื่อผู้ใช้กรอกข้อมูลไม่ครบ
  const [error, setError] = useState("");
  // State สำหรับโชว์หรือซ่อนข้อความ Error
  const [showError, setShowError] = useState(false);

  // Function ที่ใช้สำหรับรับค่าที่เปลี่ยนใน Input
  const handleInputChange = (e) => {
    // ดึงค่าจาก Value ที่กรอกเข้ามา
    const { name, value } = e.target;
    // Set input ที่รับค่าเข้ามา
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    // ถ้าก่อนหน้านี้มีError ก็จะซ่อนหน้า Error เมื่อผู้ใช้กรอกข้อความใน Input
    if (showError) {
      setShowError(false);
    }
  };

  // Function ตรวจสอบ Form ว่าได้กรอกข้อความถูกต้องไหม
  const validateForm = () => {
    const missingInput = [];

    // ถ้า name,lastname,position เป็นค่าว่างจะให้ดึง ข้อความ Name, Last Name,Position ไปแสดงการแจ้งเตือน
    if (!newUser.name) missingInput.push("Name");
    if (!newUser.lastname) missingInput.push("Last Name");
    if (!newUser.position) missingInput.push("Position");
    // ตรวจสอบว่าค่าของ Input ทั้ง 3 เป็น 0 หรือไม่ ถ้าใช่ก็ให้แสดง Error
    if (missingInput.length > 0) {
      // ถ้าใช่ให้แสดงข้อความError
      setError(`กรุณากรอก ${missingInput.join(", ")} ให้ครบถ้วน`);
      // โชว์ข้อความ
      setShowError(true);
      // ส่งคืน false เพื่อไม่ให้ส่งข้อมูลเปล่า
      return false;
    }
    // ถ้าฟอร์มครบถ้วน คืนค่า true เพื่อส่งข้อมูลเข้าไปในตาราง
    return true;
  };

  // Function Save เมื่อผู้ใช้กรอก Form
  const handleSubmit = () => {
    // เรียกใช้ Function validateForm เพื่อเช็คว่าข้อมูลกรอกมาครบหรือไม่
    if (validateForm()) {
      // สร้างข้อมูล Id ใหม่ เพื่อเพิ่มค่าเข้าไปใน Array adminData ของ newUser
      const adminToAdd = {
        id: adminData.length + 1,
        ...newUser,
      };
      // อัปเดต adminData โดยการเพิ่ม adminToAdd เข้าไปใน Array adminData
      setAdminData([...adminData, adminToAdd]);
      // Reset ค่าที่กรอกเข้าไปให้เป็นค่าว่าง
      setNewUser({
        name: "",
        lastname: "",
        position: "",
      });
      setShowError(false);
    }
  };

  // Function ลบผู้ใช้ตาม Id
  const deleteUser = (id) => {
    setAdminData(adminData.filter((user) => user.id !== id));
  };

  // Function ลบผู้ใช้ทั้งหมด
  const deleteAllUsers = () => {
    // ลบข้อมูลทั้งหมดใน adminData
    setAdminData([]);
  };

  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Create User Here</h2>

          {showError && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="flex items-center justify-between text-red-700">
                <span>{error}</span>
                <button
                  onClick={() => setShowError(false)}
                  className="text-red-700 hover:text-red-900"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          <div className="flex gap-4 items-start">
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="Name"
              className={`p-2 border rounded w-64 ${
                showError && !newUser.name ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              name="lastname"
              value={newUser.lastname}
              onChange={handleInputChange}
              placeholder="Last Name"
              className={`p-2 border rounded w-64 ${
                showError && !newUser.lastname ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              name="position"
              value={newUser.position}
              onChange={handleInputChange}
              placeholder="Position"
              className={`p-2 border rounded w-64 ${
                showError && !newUser.position ? "border-red-500" : ""
              }`}
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>

        <div>
          <table className="w-full border-collapse border rounded">
            <thead className="bg-gray-50">
              <tr>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Last Name</th>
                <th className="border p-3 text-left">Position</th>
                <th className="border p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((user) => (
                <tr key={user.id}>
                  <td className="border p-3">{user.name}</td>
                  <td className="border p-3">{user.lastname}</td>
                  <td className="border p-3">{user.position}</td>
                  <td className="border p-3">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ปุ่ม Delete All */}
          {adminData.length > 0 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={deleteAllUsers}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              >
                Delete All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
