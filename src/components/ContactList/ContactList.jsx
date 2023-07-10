import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteContacts } from 'redux/ContactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => dispatch(deleteContacts(contactId));

  const filteredContactList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contactsList = filteredContactList();

  return (
    <div>
      <ul className={css.contactList}>
        {contactsList.map(({ id, name, number }) => (
          <li className={css.listElements} key={id}>
            <span>
              {name}: {number}
            </span>
            <button
              className={css.deleteButton}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
