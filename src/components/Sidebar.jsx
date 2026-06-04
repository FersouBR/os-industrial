import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">

      <h2 className="text-xl font-bold text-blue-400">
        OS Industrial
      </h2>

      <nav className="mt-10">

        <ul className="space-y-4">

          <li>
            <Link
              to="/"
              className="block rounded-lg p-3 hover:bg-slate-800"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/equipamentos"
              className="block rounded-lg p-3 hover:bg-slate-800"
            >
              Equipamentos
            </Link>
          </li>

          <li>
            <Link
              to="/clientes"
              className="block rounded-lg p-3 hover:bg-slate-800"
            >
              Clientes
            </Link>
          </li>

          <li>
            <Link
              to="/ordens"
              className="block rounded-lg p-3 hover:bg-slate-800"
            >
              Ordens de Serviço
            </Link>
          </li>

        </ul>

      </nav>

    </aside>
  )
}

export default Sidebar