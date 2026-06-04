function Dashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-400">
        Visão geral do sistema.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl border border-slate-800 p-6">
          <h2 className="text-slate-400">
            Equipamentos
          </h2>

          <p className="mt-2 text-3xl font-bold">
            128
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 p-6">
          <h2 className="text-slate-400">
            OS Abertas
          </h2>

          <p className="mt-2 text-3xl font-bold">
            24
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 p-6">
          <h2 className="text-slate-400">
            OS Concluídas
          </h2>

          <p className="mt-2 text-3xl font-bold">
            412
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 p-6">
          <h2 className="text-slate-400">
            Clientes
          </h2>

          <p className="mt-2 text-3xl font-bold">
            57
          </p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard