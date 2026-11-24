import { FiHeart, FiHome, FiPlusSquare, FiSearch, FiUser } from 'react-icons/fi'

export default function NavDesktop() {
  return (
    <nav className="mobile-nav" aria-label="Navegação móvel">
      <a href="#top" aria-label="Início"><FiHome /></a>
      <a href="#search" aria-label="Pesquisar"><FiSearch /></a>
      <button type="button" aria-label="Criar publicação"><FiPlusSquare /></button>
      <a href="#feed" aria-label="Atividades"><FiHeart /></a>
      <button type="button" aria-label="Perfil"><FiUser /></button>
    </nav>
  )
}

