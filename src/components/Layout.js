import { Outlet } from "react-router";
import { AppBar } from "./authHeader/AuthHeader";

function Layout() {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    );
}

export default Layout;
