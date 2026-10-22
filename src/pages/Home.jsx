import Card from '../components/Card'
import Carrossel from '../components/Carrossel'
import belga from '../assets/belga.jpg'
import baunilha from '../assets/baunilha.jpg'
import frutas from '../assets/frutas.jpg'
import flocos from '../assets/flocos.jpg'

const Home = () => {
  const games = [
    { id: 1, titulo: "Sorvete de Chocolate Belga", preco: "R$ 49,90", imagem: belga },
    { id: 2, titulo: "Sorvete de Baunilha", preco: "R$ 39,90", imagem: baunilha },
    { id: 3, titulo: "Sorvete de Frutas Vermelhas", preco: "R$ 35,90", imagem: frutas },
    { id: 4, titulo: "Sorvete de Flocos", preco: "R$ 29,90", imagem: flocos }
  ];


  return (
    <>
      <Carrossel />

      <main className="px-[5%] mt-10 mb-16 grow bg-[#E5D5C3]">
        <h2 className="titulo text-3xl font-bold text-[#5C493B] mb-8 animate-[fadeIn_0.8s_ease-out]">Sorvetes em Destaque</h2>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {sorvetes.map((game, index) => (
            <div key={game.id} className="animate-[fadeInUp_0.6s_ease-out_both]" style={{ animationDelay: `${index * 150}ms` }}>
              <Card
                titulo={game.titulo}
                preco={game.preco}
                imagem={sorvete.imagem}
              />
            </div>
          ))}
        </section>
      </main>

    </>
  )
}

export default Home