import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import PublicLayout from './layouts/PublicLayout'

import Dashboard from './pages/Dashboard'
import Projetos from './pages/Projetos'
import Servicos from './pages/Servicos'
import Login from './pages/Login'
import Home from './pages/Home'

import AuthLayout from './layouts/AuthLayout'

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        {/* Rotas administrativas */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/projetos"
          element={
            <AdminLayout>
              <Projetos />
            </AdminLayout>
          }
        />
        <Route
          path="/servicos"
          element={
            <AdminLayout>
              <Servicos />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
