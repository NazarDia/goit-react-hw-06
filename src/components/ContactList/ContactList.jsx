import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const reversedContacts = contacts.slice().reverse();

  const filteredContacts = filters
    ? reversedContacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filters.name.toLowerCase()) ||
          String(contact.number).includes(filters.name)
      )
    : reversedContacts;
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
export default ContactList;
