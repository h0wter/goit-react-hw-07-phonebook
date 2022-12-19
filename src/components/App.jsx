import React from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// export const App = () => {
//   return (
//     <>
//       <h1>hello</h1>
//     </>
//   );
// };

export const App = () => {
  return (
    <>
      <Box as="h2" mb="10px">
        Phonebook
      </Box>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </>
  );
};
