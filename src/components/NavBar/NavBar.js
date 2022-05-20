import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar (){

    return(
        <nav className="NavBar">
            <div className="navBarItem"><Link to={"/"}>Inicio</Link></div>
            <div className="navBarItem"><Link to={"/"}>Seg 1</Link></div>
            <div className="navBarItem"><Link to={"/"}>Seg 2</Link></div>
            <div className="navBarItem"><Link to={"/"}>Seg 3</Link></div>
            <div className="navBarItem"><Link to={"/"}>Seg 4</Link></div>
        </nav>
    )
}