import { useState, useEffect } from 'react'
import ordensServicoData from '../data/ordensServico'

function OrdensServico() {
         const [ordensServico, setOrdensServico] = useState(() => {
            const dadosSalvos = localStorage.getItem('ordensServico')

            return dadosSalvos
              ? JSON.parse(dadosSalvos)
              : ordensServicoData
          })
          const [equipamento, setEquipamento] =
            useState('')

          const [prioridade, setPrioridade] =
            useState('Alta')

          const [status, setStatus] =
            useState('Aberta')
          const [busca, setBusca] = 
            useState('')
            const ordensFiltradas = ordensServico.filter((os) =>
              os.equipamento.toLowerCase().includes(
                busca.toLowerCase()
              )
            )
            useEffect(() => {
            localStorage.setItem(
              'ordensServico',
              JSON.stringify(ordensServico)
            )
          }, [ordensServico])
            function adicionarOS() {
                      if (!equipamento) return

                          const novaOS = {
                            id: ordensServico.length + 1,
                            equipamento,
                            prioridade,
                            status,
                          }

                          setOrdensServico([
                            ...ordensServico,
                            novaOS,
                          ])

                setEquipamento('')
                setPrioridade('Alta')
                setStatus('Aberta')
              }
             function excluirOS(id) {
            setOrdensServico(
              ordensServico.filter(
                (os) => os.id !== id
              )
            )
          }
  return (
    <div>

      <div className="flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Ordens de Serviço
        </h1>

        <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
          Nova OS
        </button>

      </div>

      <p className="mt-4 text-slate-400">
        Controle das ordens de serviço.
      </p>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Pesquisar OS..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
        />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-4">

          <input
            type="text"
            placeholder="Equipamento"
            value={equipamento}
            onChange={(e) =>
              setEquipamento(e.target.value)
            }
            className="rounded border border-slate-700 bg-slate-900 p-3"
          />

          <select
            value={prioridade}
            onChange={(e) =>
              setPrioridade(e.target.value)
            }
            className="rounded border border-slate-700 bg-slate-900 p-3"
          >
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="rounded border border-slate-700 bg-slate-900 p-3"
          >
            <option>Aberta</option>
            <option>Em Execução</option>
            <option>Concluída</option>
          </select>

          <button
            onClick={adicionarOS}
            className="rounded bg-blue-600 px-4 py-3 hover:bg-blue-700"
          >
            Adicionar
          </button>
  

        </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-800">

        <table className="w-full">

          <thead className="bg-slate-900">

          <tr>
          <th className="p-4 text-left">Nº</th>
          <th className="p-4 text-left">Equipamento</th>
          <th className="p-4 text-left">Prioridade</th>
          <th className="p-4 text-left">Status</th>
          <th className="p-4 text-left">Ações</th>
          </tr>

          </thead>

          <tbody>

            {ordensFiltradas.map((os) => (
              <tr
                key={os.id}
                className="border-t border-slate-800"
              >
                <td className="p-4">{os.id}</td>
                <td className="p-4">{os.equipamento}</td>
                <td className="p-4">{os.prioridade}</td>
                <td className="p-4">

                    <span
                      className={
                        os.status === 'Aberta'
                          ? 'rounded-full bg-red-500/20 px-3 py-1 text-red-400'
                          : os.status === 'Em Execução'
                          ? 'rounded-full bg-yellow-500/20 px-3 py-1 text-yellow-400'
                          : 'rounded-full bg-green-500/20 px-3 py-1 text-green-400'
                      }
                    >
                      {os.status}
                    </span>

                  </td>
                <td className="p-4">

                  <button
                    onClick={() => excluirOS(os.id)}
                    className="rounded bg-red-600 px-3 py-1 hover:bg-red-700"
                  >
                    Excluir
                  </button>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default OrdensServico