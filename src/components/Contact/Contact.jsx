import { FaPhone, FaUser } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div>
      <div className={css.contactContainer}>
        <div className={css.contactItems}>
          <li className={css.listItem}>
            <FaUser />
            {contact.name}
          </li>
          <li className={css.listItem}>
            <FaPhone />
            {contact.number}
          </li>
        </div>
        <button
          className={css.contactBtn}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Contact;
