import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList key={nanoid()} />
    </div>
  );
}
