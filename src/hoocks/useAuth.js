import { useSelector } from "react-redux";
import {
    selectIsRefreshing,
    selectIsloggedIn,
    selectUser,
} from "../app/auth/selector";

function useAuth() {
    const isLoggedIn = useSelector(selectIsloggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
}

export default useAuth;
