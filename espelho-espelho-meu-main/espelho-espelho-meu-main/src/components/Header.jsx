import { FiHeart, FiHome, FiPlusSquare, FiSearch } from 'react-icons/fi'

function Header({ query, onSearch }) {
  return (
    <header className="header" id="top">
      <a className="header__logo" href="#top" aria-label="Garagem, início"><span className="logo-mark">G</span> garagem<span className="logo-period">.</span></a>
      <div className="header__search"><FiSearch aria-hidden="true" /><input id="search" aria-label="Buscar carros e pessoas" placeholder="Buscar carros e pessoas" value={query} onChange={(event) => onSearch(event.target.value)} /></div>
      <nav className="header__actions" aria-label="Navegação principal">
        <a className="icon-button" href="#top" aria-label="Início"><FiHome /></a>
        <button className="icon-button" type="button" aria-label="Criar publicação"><FiPlusSquare /></button>
        <a className="icon-button" href="#feed" aria-label="Atividades"><FiHeart /></a>
      </nav>
    </header>
  )
}

export default Header


