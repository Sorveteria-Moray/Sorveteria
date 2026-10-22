const Card = ({ titulo, preco, imagem }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden border-3 border-[#E5D5C3] pb-[60px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#A88970]">
      <img src={imagem} alt={titulo} className="w-full h-[250px] object-cover" />

      <article className="min-h-[120px] text-center bg-[#F7F3EB] flex flex-col items-center gap-2">

        <h2 className="text-xl text-[#5C493B] font-bold mb-3 uppercase">{titulo}</h2>
        <p className="text-[#A88970] text-2xl font-bold mb-4">{preco}</p>
        <button className="bg-[#A88970] text-white w-[50%] py-3 px-4 mb-2 rounded-full border-none cursor-pointer font-semibold transition-all duration-300 hover:bg-[#8F7059] hover:scale-105 hover:shadow-md active:scale-95">
          Comprar
        </button>
      </article>

    </div>
  )
}

export default Card