import { useDispatch } from "react-redux";
import { logIn } from "../../app/auth/operations";

function LogInForm() {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="">
                email
                <input
                    type="email"
                    className="form__input"
                    placeholder="email"
                    name="email"
                />
            </label>
            <label htmlFor="">
                password
                <input
                    type="password"
                    className="form__input"
                    placeholder="password"
                    name="password"
                />
            </label>
            <button type="submit" className="form__button">
                Log In
            </button>
        </form>
    );
}
export default LogInForm;
