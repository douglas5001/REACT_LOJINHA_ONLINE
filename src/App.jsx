import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/auth-provider";
import Protected from "./components/Protected";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Projetos from "./pages/Projetos";
import Servicos from "./pages/Servicos";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/dashboard" element={<Protected><AdminLayout><Dashboard /></AdminLayout></Protected>} />
          <Route path="/projetos" element={<Protected><AdminLayout><Projetos /></AdminLayout></Protected>} />
          <Route path="/servicos" element={<Protected><AdminLayout><Servicos /></AdminLayout></Protected>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
