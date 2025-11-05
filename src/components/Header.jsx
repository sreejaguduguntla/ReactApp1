export default function Header(){
  return(
    <header className="header"> 
          <nav>
            <div className="nav-left">
              <img src="src/assets/react.svg"  alt="React logo" />
              <span>React Facts</span>
            </div>
            <ul className="nav-list">
              <li className="nav-list-items">Pricing</li>
              <li className="nav-list-items">About</li>
              <li className="nav-list-items">Contact</li>
            </ul>
          </nav>
    </header>
  )
}
