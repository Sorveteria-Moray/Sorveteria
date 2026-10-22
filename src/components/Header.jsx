import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-[#F7F3EB] shadow-sm">
      <h1 className="translate-x-8 p-2 text-[2rem] font-bold text-[#5C493B] cursor-pointer transition-transform duration-300 hover:scale-105">
        SORVETERIA <span className="text-[#A88970] p-1"> MORAY</span>
      </h1>

      <nav>
        <ul className="-translate-x-8 flex list-none items-center gap-8">

          <li>
            <Link to="/" className="text-[#5C493B] text-lg no-underline hover:text-[#A88970] transition-colors duration-300">Home</Link>
          </li>

          <li>
            <Link to="/sorvetes" className="text-[#5C493B] text-lg no-underline hover:text-[#A88970] transition-colors duration-300">Sorvetes</Link>
          </li>

          <li>
            <Link to="/contato" className="text-[#5C493B] text-lg no-underline hover:text-[#A88970] transition-colors duration-300">Contato</Link>
          </li>

          <li>
            <Link to="/login" className="text-[#5C493B] text-lg no-underline hover:text-[#A88970] transition-colors duration-300">Login</Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header