import s from "./PhoneBook.module.css";
import { useSelector } from "react-redux";
function PhoneBookList() {
    const { contacts, filterQuery } = useSelector((state) => state.phoneBook);

    console.log(contacts);
    const filteredContacts = contacts.filter((item) =>
        item.name.toUpperCase().includes(filterQuery.toUpperCase())
    );

    return (
        <>
            <ul className="phonebook_list">
                <li className="phonebook_item">
                    {filteredContacts.map((item) => (
                        <li key={item.id}>
                            <div className="item_name">{item.name}</div>
                            <div className="item_number">{item.number}</div>
                        </li>
                    ))}
                </li>
            </ul>
        </>
    );
}
export default PhoneBookList;
