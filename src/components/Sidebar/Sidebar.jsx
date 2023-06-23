import { Link, useLocation } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
    const location = useLocation();
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open")
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    }
    return (
        <div className="sidebar">
            <i className="menu fa-solid fa-bars" onClick={openMenu}></i>
            <div className="sidebarMenu">
                <div className="sidebarTitle">
                    <h3 className="sidebarHeading">Dashboard</h3>
                    <i className="cross fa-solid fa-xmark" onClick={closeMenu}></i>
                </div>
                <ul className="sidebarList">
                    <Link to="/" onClick={closeMenu} className={`sidebarListItem ${location.pathname === "/" ? "active" : ""}`}>
                        <i className="sidebarIcon fas fa-home"></i>
                        <p>Home</p>
                    </Link>

                    <Link to="/contact" onClick={closeMenu} className={`sidebarListItem ${location.pathname === "/contact" ? "active" : ""}`}>
                        <i className="sidebarIcon fa-solid fa-address-book"></i>
                        <p>Contact</p>
                    </Link>

                    <Link to="/info" onClick={closeMenu} className={`sidebarListItem ${location.pathname === "/info" ? "active" : ""}`}>
                        <i className="sidebarIcon fas fa-info"></i>
                        <p to="/info">Information</p>
                    </Link>

                    <Link to="/guide" onClick={closeMenu} className={`sidebarListItem ${location.pathname === "/guide" ? "active" : ""}`}>
                        <i className="sidebarIcon fa-solid fa-pager"></i>
                        <p>Guide</p>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
