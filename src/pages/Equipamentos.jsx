import { useState, useEffect } from 'react'
import equipamentosData from '../data/equipamentos'

function Equipamentos() {
const [equipamentos, setEquipamentos] = useState(() => {
  const dadosSalvos = localStorage.getItem('equipamentos')

  return dadosSalvos
    ? JSON.parse(dadosSalvos)
    : equipamentosData
})
  const [busca, setBusca] = useState('')
  const [nome, setNome] = useState('')
  const [setor, setSetor] = useState('')
  const [fabricante, setFabricante] = useState('')
  const [status, setStatus] = useState('Ativo')
  const [modoEdicao, setModoEdicao] = useState(false)
  const [idEdicao, setIdEdicao] = useState(null)
  useEffect(() => {
  localStorage.setItem(
    'equipamentos',
    JSON.stringify(equipamentos)
  )
  }, [equipamentos])
  const equipamentosFiltrados = equipamentos.filter((equipamento) =>
  equipamento.nome.toLowerCase().includes(busca.toLowerCase())
  
)

        function adicionarEquipamento() {
          if (!nome || !setor || !fabricante) {
            return
          }

          const novoEquipamento = {
            id: equipamentos.length + 1,
            nome,
            setor,
            fabricante,
            status,
          }

          setEquipamentos([...equipamentos, novoEquipamento])

          setNome('')
          setSetor('')
          setFabricante('')
          setStatus('Ativo')
        }
        function excluirEquipamento(id) {
          setEquipamentos(
            equipamentos.filter(
              (equipamento) => equipamento.id !== id
            )
          )
        }
        function editarEquipamento(equipamento) {
          setModoEdicao(true)
          setIdEdicao(equipamento.id)

          setNome(equipamento.nome)
          setSetor(equipamento.setor)
          setFabricante(equipamento.fabricante)
          setStatus(equipamento.status)
        }
        function salvarEdicao() {
            setEquipamentos(
              equipamentos.map((equipamento) =>
                equipamento.id === idEdicao
                  ? {
                      ...equipamento,
                      nome,
                      setor,
                      fabricante,
                      status,
                    }
                  : equipamento
              )
            )

            setModoEdicao(false)
            setIdEdicao(null)

            setNome('')
            setSetor('')
            setFabricante('')
            setStatus('Ativo')
          }
  return (
    <div>

      <div className="flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Equipamentos
        </h1>
        

        <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
          Novo Equipamento
        </button>

      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-5">

            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="rounded border border-slate-700 bg-slate-900 p-3"
            />

            <input
              type="text"
              placeholder="Setor"
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
              className="rounded border border-slate-700 bg-slate-900 p-3"
            />

            <input
              type="text"
              placeholder="Fabricante"
              value={fabricante}
              onChange={(e) => setFabricante(e.target.value)}
              className="rounded border border-slate-700 bg-slate-900 p-3"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded border border-slate-700 bg-slate-900 p-3"
            >
              <option>Ativo</option>
              <option>Parado</option>
            </select>

            <button
              onClick={
                modoEdicao
                  ? salvarEdicao
                  : adicionarEquipamento
              }
              className="rounded bg-blue-600 px-4 py-3 hover:bg-blue-700"
              >
              {modoEdicao ? 'Salvar' : 'Adicionar'}
            </button>

          </div>

        <div className="mt-6">
        <input
          type="text"
          placeholder="Pesquisar equipamento..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
          />
         </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-800">

        <table className="w-full">

          <thead className="bg-slate-900">

            <tr>

              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">Setor</th>
              <th className="p-4 text-left">Fabricante</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Ações</th>

            </tr>

          </thead>

          <tbody>

            {equipamentosFiltrados.map((equipamento) => (
              <tr
                key={equipamento.id}
                className="border-t border-slate-800"
              >
                <td className="p-4">{equipamento.id}</td>
                <td className="p-4">{equipamento.nome}</td>
                <td className="p-4">{equipamento.setor}</td>
                <td className="p-4">{equipamento.fabricante}</td>
                <td className="p-4">

                  <span
                    className={
                      equipamento.status === 'Ativo'
                        ? 'rounded-full bg-green-500/20 px-3 py-1 text-green-400'
                        : 'rounded-full bg-red-500/20 px-3 py-1 text-red-400'
                    }
                  >
                    {equipamento.status}
                  </span>
                  

                </td>
                <td className="p-4">
                <button
                    onClick={() => editarEquipamento(equipamento)}
                    className="mr-2 rounded bg-yellow-600 px-3 py-1 hover:bg-yellow-700"
                  >
                    Editar
                  </button>
                

                  <button
                    onClick={() => excluirEquipamento(equipamento.id)}
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

export default Equipamentos