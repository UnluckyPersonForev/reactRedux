import { NavLink } from "react-router";
function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="list__item">
                    <NavLink to="/">home</NavLink>
                </li>
                <li className="list__item">
                    <NavLink to="/contacts">contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
