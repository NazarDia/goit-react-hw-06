import { FaPhone, FaUser } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contactContainer}>
      <div className={css.contactItems}>
        <p className={css.listItem}>
          <FaUser />
          {name}
        </p>
        <p className={css.listItem}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
