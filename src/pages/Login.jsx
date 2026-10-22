import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const campo = "w-full p-3.5 rounded-xl bg-[#fff5e6] text-[#5c3324] border border-[#e8cdb5] focus:border-[#ff4f8b] focus:ring-1 focus:ring-[#ff4f8b] outline-none transition-all placeholder:text-[#b59a88]"

const Login = () => {
  //Hook- useState- manipula o estado das variáveis
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [lembrar, setLembrar] = useState(false)
  //Hook- useNavigate- Navega entre as páginas
  const navigate = useNavigate()

  //função de login
  const entrar = (e) => {
    //Previne que a página recarregue
    e.preventDefault()
    alert(`Bem-vindo(a) à Sorveteria Moray, ${email}!`)
    //Direciona para a página Home
    navigate("/")
  }

  return (
    <main className="grow flex items-center justify-center px-4 login">
      <div className="bg-white p-8 sm:p-10 rounded-[20px] w-full max-w-md shadow-xl border-2 border-[#ff4f8b]">

        <div className="text-center mb-8">
          <span className="text-5xl" aria-hidden="true">🍦</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ff4f8b] mt-2 uppercase tracking-wider">
            Entrar
          </h2>
          <p className="text-[#8a5a44] text-sm mt-1">Acesse sua conta na Sorveteria Moray</p>
        </div>

        <form onSubmit={entrar} className="flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="block text-[#5c3324] mb-2 text-sm font-semibold tracking-wide">E-mail</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className={campo}
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-[#5c3324] mb-2 text-sm font-semibold tracking-wide">Senha</label>
            <div className="relative">
              <input
                id="senha"
                type={mostrarSenha ? "text" : "password"}
                required
                minLength={6}
                autoComplete="current-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                className={`${campo} pr-24`}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#ff4f8b] hover:underline cursor-pointer"
              >
                {mostrarSenha ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#5c3324] cursor-pointer">
              <input
                type="checkbox"
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
                className="accent-[#ff4f8b] w-4 h-4"
              />
              Lembrar de mim
            </label>
            <Link to="/contato" className="text-[#ff4f8b] hover:underline font-medium">
              Esqueci a senha
            </Link>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 to-orange-300 text-white w-full py-3.5 rounded-[20px] text-lg font-semibold transition-transform duration-300 hover:from-pink-500 hover:to-orange-400 hover:scale-105 cursor-pointer shadow-lg"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-[#8a5a44] mt-6 text-sm">
          Ainda não tem conta? <Link to="/contato" className="text-[#ff4f8b] hover:underline font-medium">Fale conosco</Link>
        </p>
      </div>
    </main>
  )
}

export default Login