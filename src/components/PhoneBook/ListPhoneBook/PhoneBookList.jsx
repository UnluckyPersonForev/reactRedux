import { deleteContact } from "../../../app/phoneBook/phoneBookThunk";
import s from "./PhoneBook.module.css";
import { useDispatch, useSelector } from "react-redux";
function PhoneBookList() {
    const dispatch = useDispatch();
    const { isLoading, error, items } = useSelector(
        (state) => state.phoneBook.contacts
    );
    const filter = useSelector((state) => state.phoneBook.filter);
    if (!items) return;

    const filteredContacts = items.filter((item) => {
        if (!item) {
            return false;
        }

        return item.name.toUpperCase().includes(filter.toUpperCase());
    });

    return (
        <>
            <ul className="phonebook_list">
                {filteredContacts.map((item) => (
                    <li key={item.id} className="phonebook_item">
                        <div className="item_name">{item.name}</div>
                        <div className="item_number">{item.phone}</div>
                        <button
                            onClick={() => {
                                dispatch(deleteContact(item.id));
                            }}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default PhoneBookList;
