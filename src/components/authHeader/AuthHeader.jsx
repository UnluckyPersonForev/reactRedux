import useAuth from "../../hoocks/useAuth";
import AuthNavigation from "../authNavigation/authNavigation";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <header className="css.header">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </header>
    );
};
