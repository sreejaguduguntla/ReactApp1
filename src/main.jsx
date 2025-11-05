import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <main>
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
        
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)