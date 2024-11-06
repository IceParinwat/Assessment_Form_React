/* eslint-disable react/prop-types */

// รับ prop adminData ข้อมูลผู้ใช้ทั้งหมด
export default function User({ adminData }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">User View</h2>

      <table className="w-full border-collapse border rounded">
        <thead className="bg-gray-50">
          <tr>
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Last Name</th>
            <th className="border p-3 text-left">Position</th>
          </tr>
        </thead>
        <tbody>
        {/* ใช้ .map เพื่อสร้าง Array ใหม่ และ วนลูปแสดงข้อมูลจาก adminData */}
          {adminData.map((user) => (
            <tr key={user.id}>
              <td className="border p-3">{user.name}</td>
              <td className="border p-3">{user.lastName}</td>
              <td className="border p-3">{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
