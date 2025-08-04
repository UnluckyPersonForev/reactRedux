import { NavLink } from "react-router";

function AuthNavigation() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="list__item">
                    <NavLink to="/login">log in</NavLink>
                </li>
                <li className="list__item">
                    <NavLink to="/register">register</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default AuthNavigation;
