import { Container } from './App.styled';
import { Section } from 'components/Section';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

export const App = () => {
  return (
    <Container>
      <Section title="Phonebook" />
      <ContactForm />
      <Section title="Contacts" />
      <Filter />
      <ContactList />
    </Container>
  );
};
