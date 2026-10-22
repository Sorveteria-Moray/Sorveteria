import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex flex-col items-center justify-center bg-[#E5D5C3]">

      <h2 className="text-6xl font-bold text-[#A88970] mb-4 animate-[fadeIn_0.8s_ease-out]">404</h2>

      <p className="text-2xl text-[#5C493B] font-semibold mb-2">Ops! Página não encontrada</p>

      <p className="text-[#8F7967] mb-8 max-w-md">Parece que você se perdeu no caminho dos brinquedos. A página que você está procurando não existe ou foi removida.</p>

      <Link to="/" className="bg-[#A88970] text-white py-3 px-8 rounded-full font-bold text-lg no-underline transition-all duration-300 hover:bg-[#8F7059] hover:scale-105 hover:shadow-md active:scale-95">
        Voltar para a Home
      </Link>

    </main>
  )
}

export default Error