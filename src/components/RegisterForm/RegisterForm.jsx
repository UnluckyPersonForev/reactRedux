import { useDispatch } from "react-redux";
import { register } from "../../app/auth/operations";

function RegisterForm() {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form.elements);

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="">
                user name
                <input
                    type="text"
                    className="form__input"
                    placeholder="user name"
                    name="name"
                />
            </label>
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
                Register
            </button>
        </form>
    );
}
export default RegisterForm;
