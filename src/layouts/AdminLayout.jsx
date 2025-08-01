import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useState } from 'react'

function AdminLayout({ children }) {
  const [sidebarAberta, setSidebarAberta] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar aberta={sidebarAberta} onClose={() => setSidebarAberta(false)} />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarAberta ? 'ml-64' : ''
        }`}
      >
        <Header aoClicarMenu={() => setSidebarAberta(!sidebarAberta)} />
        <main className="p-6 overflow-auto flex-1">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout
