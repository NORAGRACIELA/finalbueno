import { Routes, Route, Link } from "react-router-dom";
import "./Menu.css"
export function Menu(){
    return
    <>
    <nav classname="navbar navbar-expand-lg menu navbar-dark">
  <div classname="container-fluid">
    <Link classname="navbar-brand" to="#">Navbar</Link>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarNav">
      <ul classname="navbar-nav">
        <li classname="nav-item">
          <Link classname="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li classname="nav-item">
          <Link classname="nav-link" to="#">Features</Link>
        </li>
        <li classname="nav-item">
          <Link classname="nav-link" to="#">Pricing</Link>
        </li>
        <li classname="nav-item">
          <Link classname="nav-link disabled">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
}