import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactItem, ContactData } from './Contact.styled';
import { Button } from 'components/Button/Button';
import { deleteContact } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, phone, id } = contact;
  const isLoading = useSelector(getIsLoading);
  console.log(isLoading);
  return (
    <ContactItem>
      <ContactData>
        {name}: {phone}
      </ContactData>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};
