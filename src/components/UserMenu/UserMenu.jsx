import { useDispatch } from "react-redux";
import useAuth from "../../hoocks/useAuth";
import { logOut } from "../../app/auth/operations";

function UserMenu() {
    const { user } = useAuth();
    const dispatch = useDispatch();
    return (
        <div className="user__info">
            <div className="user__text">{`welcome ${user.name}`}</div>
            <button onClick={() => dispatch(logOut())}>log out</button>
        </div>
    );
}
export default UserMenu;
