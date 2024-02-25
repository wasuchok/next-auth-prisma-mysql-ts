import React from 'react'

const Navbar = () => {
  return (
<nav className="bg-blue-500 p-4">
  <div className="container mx-auto flex items-center justify-between">
    <a href="#" className="text-white text-lg font-semibold">Nextjs</a>
    <div className="hidden md:flex space-x-4">
      <a href="#" className="text-white hover:text-gray-300">หน้าแรก</a>
    </div>
  </div>
</nav>


  )
}

export default Navbar