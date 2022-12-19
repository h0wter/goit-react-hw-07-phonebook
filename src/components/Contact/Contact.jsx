import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactItem, ContactData } from './Contact.styled';
import { Button } from 'components/Button/Button';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactData>
        {contact.name}: {contact.number}
      </ContactData>
      <Button
        type="button"
        onClick={() => dispatch(deleteContact({ id: contact.id }))}
      >
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
