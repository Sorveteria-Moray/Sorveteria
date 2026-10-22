import { useState } from 'react'
import Card from '../components/Card'
import belga from '../assets/belga.jpg'
import baunilha from '../assets/baunilha.jpg'
import frutas from '../assets/frutas.jpg'
import flocos from '../assets/flocos.jpg'

const sorvetes = [
  { id: 1, titulo: "Sorvete de Chocolate Belga", preco: "R$ 49,90", imagem: belga, categoria: "Chocolate" },
  { id: 2, titulo: "Sorvete de Baunilha", preco: "R$ 39,90", imagem: baunilha, categoria: "Cremosos" },
  { id: 3, titulo: "Sorvete de Frutas Vermelhas", preco: "R$ 35,90", imagem: frutas, categoria: "Frutas" },
  { id: 4, titulo: "Sorvete de Flocos", preco: "R$ 29,90", imagem: flocos, categoria: "Cremosos" },
]

const categorias = ["Todos", "Cremosos", "Chocolate", "Frutas"]

const Sorvetes = () => {
  const [categoria, setCategoria] = useState("Todos")
  const [busca, setBusca] = useState("")

  const filtrados = sorvetes.filter((s) => {
    const bateCategoria = categoria === "Todos" || s.categoria === categoria
    const bateBusca = s.titulo.toLowerCase().includes(busca.toLowerCase())
    return bateCategoria && bateBusca
  })

  return (
    <main className="px-[5%] mt-10 mb-16 grow bg-[#E5D5C3]">
      <h2 className="titulo text-3xl font-bold text-[#5C493B] mb-6 animate-[fadeIn_0.8s_ease-out]">
        Nossos Sorvetes
      </h2>

      {/* Busca + filtros */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-5 py-2 rounded-full font-semibold cursor-pointer transition-colors ${categoria === cat
                ? 'bg-[#5C493B] text-white'
                : 'bg-[#A68A6D] text-white hover:bg-[#8B6B4F]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Buscar sorvete..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="px-5 py-2 rounded-full bg-[#F7F3EC] text-[#5C493B] outline-none w-full md:w-72"
        />
      </div>

      {/* Lista */}
      {filtrados.length > 0 ? (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] gap-6">
          {filtrados.map((sorvete, index) => (
            <div
              key={sorvete.id}
              className="animate-[fadeInUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card
                titulo={sorvete.titulo}
                preco={sorvete.preco}
                imagem={sorvete.imagem}
              />
            </div>
          ))}
        </section>
      ) : (
        <p className="text-[#5C493B] text-lg">Nenhum sorvete encontrado 🍦</p>
      )}
    </main>
  )
}

export default Sorvetes
