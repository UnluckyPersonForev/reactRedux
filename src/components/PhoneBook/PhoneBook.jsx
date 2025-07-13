import { useEffect } from "react";
import Filter from "../Filter";
import ContactForm from "./ContactForm";
import PhoneBookList from "./ListPhoneBook";
import { useDispatch } from "react-redux";
import { fetchContact } from "../../app/phoneBook/phoneBookThunk";

function PhoneBook() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);
    return (
        <>
            <ContactForm />
            <Filter />
            <PhoneBookList />
        </>
    );
}
export default PhoneBook;
