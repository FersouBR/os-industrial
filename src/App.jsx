import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'
import Equipamentos from './pages/Equipamentos'
import Clientes from './pages/Clientes'
import OrdensServico from './pages/OrdensServico'

function App() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-10">

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/equipamentos"
            element={<Equipamentos />}
          />

          <Route
            path="/clientes"
            element={<Clientes />}
          />

          <Route
            path="/ordens"
            element={<OrdensServico />}
          />

        </Routes>

      </main>

    </div>
  )
}

export default App