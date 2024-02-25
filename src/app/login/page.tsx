
const login = () => {
  return (
    <>
    <div className="flex justify-center">
<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
  <h2 className="text-2xl font-semibold mb-6">เข้าสู่ระบบ</h2>
  <form>
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Username</label>
      <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your username" required />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
      <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
    </div>
    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">ยืนยัน</button>
  </form>
  <div className="mt-4 text-center">
    <p className="text-sm text-gray-600">ไม่มีบัญชีผู้ใช้งาน? <a href="#" className="text-blue-500 hover:underline">สมัครสมาชิก</a></p>
  </div>
</div>
</div>
    </>
  )
}

export default login