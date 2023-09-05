import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormEl, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const inputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const dataSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
    //console.log(contacts);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormEl onSubmit={dataSubmit}>
      <Label>
        {' '}
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={inputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        {' '}
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={inputChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormEl>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};

///////////////////////////////////////////////////////////////////////////////

// import PropTypes from "prop-types";
// import { FormEl, Label, Input, Button } from './ContactForm.styled';
// import { Formik, ErrorMessage } from "formik";
// import * as yup from 'yup';

// const initialValues = {
//   name: '',
//   number: '',
// }

// const schema = yup.object().shape({
//   name: yup.string().trim().required(),
//   number: yup.string().trim().required(),
// });

// export const ContactForm = () => {

//   const handleSubmit = (values, {resetForm}) => {
//     console.log(values);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={schema}
//     >
//       <FormEl >
//         <Label> Name
//           <Input
//             type="text"
//             name="name"
//             //value={name}
//             //onChange={inputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <ErrorMessage name="name" component="div"/>
//         </Label>
//         <Label> Number
//           <Input
//             type="tel"
//             name="number"
//             //value={number}
//             //onChange={inputChange}
//             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <ErrorMessage name="number" component="div"/>
//         </Label>
//         <Button type='submit'>Add contact</Button>
//       </FormEl>
//     </Formik>
//     )
// }

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func,
//     type: PropTypes.string,
//     name: PropTypes.string,
//     value: PropTypes.string,
//     onChange: PropTypes.func,
//     pattern: PropTypes.string,
//     title: PropTypes.string,
//     required: PropTypes.bool,
// }
////////////////////////////////////////////////////////////////////////////

// import PropTypes from "prop-types";
// import { useState } from 'react';
// import { Form, Label, Input, Button } from './ContactForm.styled';

// export const ContactForm =() => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const inputChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const dataSubmit = event => {
//     event.preventDefault();
//     const formSubmit = ({ name, number }) => ({
//       name: name,
//       number: number,
//     });

//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//       <Form onSubmit={dataSubmit}>
//         <Label> Name
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             onChange={inputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label> Number
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={inputChange}
//             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <Button type='submit'>Add contact</Button>
//       </Form>
//     )
// }

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func,
//     type: PropTypes.string,
//     name: PropTypes.string,
//     value: PropTypes.string,
//     onChange: PropTypes.func,
//     pattern: PropTypes.string,
//     title: PropTypes.string,
//     required: PropTypes.bool,
// }
