import { useState } from "react"

const campo = "w-full p-3.5 rounded-xl bg-[#fff5e6] text-[#5c3324] border border-[#e8cdb5] focus:border-[#ff4f8b] focus:ring-1 focus:ring-[#ff4f8b] outline-none transition-all placeholder:text-[#b59a88]"

const informacoes = [
  { icone: "📍", titulo: "Endereço", texto: "Rua dos Sabores, 123 - Centro, São Paulo - SP" },
  { icone: "🕒", titulo: "Horário", texto: "Todos os dias, das 11h às 22h" },
  { icone: "📞", titulo: "Telefone / WhatsApp", texto: "(11) 99999-9999" },
  { icone: "✉️", titulo: "E-mail", texto: "contato@sorveteriamoray.com" },
]

const Contato = () => {
  //Hook- useState- manipula o estado das variáveis do formulário
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [assunto, setAssunto] = useState("duvida")
  const [mensagem, setMensagem] = useState("")

  //função de envio do formulário
  const enviar = (e) => {
    //Previne que a página recarregue
    e.preventDefault()
    alert(`Obrigado, ${nome}! Recebemos sua mensagem e responderemos em breve.`)
    setNome("")
    setEmail("")
    setAssunto("duvida")
    setMensagem("")
  }

  return (
    <main className="px-[5%] my-8 grow">
      <h2 className="titulo text-3xl font-bold">Fale Conosco</h2>
      <p className="text-[#5c3324] mb-8 max-w-2xl">
        Dúvidas, elogios, encomendas para festas ou sugestões de novos sabores?
        Mande sua mensagem ou venha nos visitar!
      </p>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Informações da sorveteria */}
        <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-[#ff4f8b]">Nossa Sorveteria</h3>
          {informacoes.map((item) => (
            <div key={item.titulo} className="flex items-start gap-4">
              <span className="text-2xl" aria-hidden="true">{item.icone}</span>
              <div>
                <p className="font-semibold text-[#5c3324]">{item.titulo}</p>
                <p className="text-[#8a5a44]">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Formulário */}
        <form onSubmit={enviar} className="bg-white rounded-2xl p-8 shadow-md flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-[#ff4f8b]">Envie uma mensagem</h3>

          <div>
            <label htmlFor="nome" className="block text-[#5c3324] mb-2 text-sm font-semibold tracking-wide">Nome</label>
            <input
              id="nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              className={campo}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#5c3324] mb-2 text-sm font-semibold tracking-wide">E-mail</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className={campo}
            />
          </div>

          <div>
            <label htmlFor="assunto" className="block text-[#5c3324] mb-2 text-sm font-semibold tracking-wide">Assunto</label>
            <select
              id="assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              className={campo}
            >
              <option value="duvida">Dúvida</option>
              <option value="encomenda">Encomenda para festas e eventos</option>
              <option value="sugestao">Sugestão de sabor</option>
              <option value="elogio">Elogio ou reclamação</option>
            </select>
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-[#5c3324] mb-2 text-sm font-semibold tracking-wide">Mensagem</label>
            <textarea
              id="mensagem"
              required
              rows={5}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Como podemos ajudar?"
              className={campo}
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 to-orange-300 text-white py-3.5 rounded-[20px] text-lg font-semibold transition-transform duration-300 hover:from-pink-500 hover:to-orange-400 hover:scale-105 cursor-pointer shadow-lg"
          >
            Enviar mensagem
          </button>
        </form>
      </section>
    </main>
  )
}

export default Contato