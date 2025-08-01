import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Projetos from './pages/Projetos'
import Servicos from './pages/Servicos'

function App() {
  const [sidebarAberta, setSidebarAberta] = useState(false)

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar aberta={sidebarAberta} onClose={() => setSidebarAberta(false)} />

        <div className="flex-1 flex flex-col transition-all">
          <Header onMenuClick={() => setSidebarAberta(!sidebarAberta)} />
          <main className="p-6 bg-gray-50 overflow-auto flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/servicos" element={<Servicos />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
