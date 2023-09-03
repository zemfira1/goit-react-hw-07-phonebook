//import { useEffect } from 'react';
import { Contact, ButtonDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteThisContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Contact key={id}>
      <FiPhone />
      <p>
        {name}: {number}
      </p>
      <ButtonDelete onClick={() => deleteThisContact(id)}>Delete</ButtonDelete>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
