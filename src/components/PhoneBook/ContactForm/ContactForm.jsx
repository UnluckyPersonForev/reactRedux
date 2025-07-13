import { useState } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../../app/phoneBook/phoneBookThunk";
import { useSelector } from "react-redux";
function ContactForm() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const contacts = useSelector((state) => state.phoneBook.contacts.items);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        for (let item of contacts) {
            if (item.name === name) {
                return;
            }
        }
        dispatch(addContact({ name, phone: number }));
        setName("");
        setNumber("");
    };

    return (
        <form className="contact__form" onSubmit={handleSubmit}>
            <input
                value={name}
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                className="contact__input"
                onChange={(event) => setName(event.target.value)}
            />
            <input
                value={number}
                type="text"
                name="number"
                title="Name may contain only numbers, and spaces. For example 111 111 111, 111111111"
                required
                className="contact__input"
                onChange={(event) => setNumber(event.target.value)}
            />
            <button type="submit" className="contact__button">
                Add Contact
            </button>
        </form>
    );
}
export default ContactForm;
