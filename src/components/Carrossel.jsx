import { useState, useEffect } from 'react'
import belga from '../assets/belga.jpg'
import baunilha from '../assets/baunilha.jpg'
import frutas from '../assets/frutas.jpg'

const slides = [
  { id: 1, imagem: belga, titulo: "Chocolate Belga", texto: "Intenso e cremoso, feito com cacau selecionado" },
  { id: 2, imagem: baunilha, titulo: "Baunilha Clássica", texto: "O sabor tradicional que todo mundo ama" },
  { id: 3, imagem: frutas, titulo: "Frutas Vermelhas", texto: "Refrescante e cheio de sabor" },
]

const Carrossel = () => {
  const [atual, setAtual] = useState(0)

  const proximo = () => setAtual((prev) => (prev + 1) % slides.length)
  const anterior = () => setAtual((prev) => (prev - 1 + slides.length) % slides.length)

  // Troca automática a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(proximo, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${atual * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-w-full h-full">
            <img
              src={slide.imagem}
              alt={slide.titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-4xl font-bold mb-2">{slide.titulo}</h2>
              <p className="text-lg">{slide.texto}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botões */}
      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={proximo}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ›
      </button>

      {/* Bolinhas indicadoras */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setAtual(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${i === atual ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrossel