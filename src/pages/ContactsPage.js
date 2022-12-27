import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { Section, Title, Box } from './ContactPage.styled';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Title>
            Phonebook
          <ContactForm />
        </Title>
      </Section>
      <Section>
        <Title>
            Contacts
          {contacts.length > 1 && <Filter />}
          {contacts.length === 0 && (
            <Box>
             You don't have any contacts yet.
            </Box>
          )}
          {isLoading && 'Loading...'}
          <ContactList />
        </Title>
      </Section>
    </>
  );
}
