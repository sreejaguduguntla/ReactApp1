export default function Header(){
  return(
    <header className="header"> 
          <img src="src/assets/react.svg" width="40px" alt="React logo" />
          <nav>
            <ul className="nav-list">
              <li className="nav-list-items">Pricing</li>
              <li className="nav-list-items">About</li>
              <li className="nav-list-items">Contact</li>
            </ul>
          </nav>
    </header>
  )
}
