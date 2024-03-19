import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactFormSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too few characters! Please provide more information!')
    .max(50, 'Too long! Please limit the input!')
    .required('Field is required and cannot be empty'),
  phoneNumber: Yup.string()
    .min(3, 'Min value 3.')
    .max(30, 'Max value 30.')
    .required('Field is required and cannot be empty'),
});

const initialValues = {
  contactName: '',
  phoneNumber: '',
};

const ContactForm = () => {
  const contactNameId = nanoid();
  const phoneNumberId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { contactName, phoneNumber } = values;
    dispatch(addContact({ name: contactName, number: phoneNumber }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formBox}>
          <label className={css.formLabel}>Name</label>
          <Field
            className={css.formInput}
            type="text"
            name="contactName"
            id={contactNameId}
            placeholder="Enter contact name"
          />
          <ErrorMessage
            name="contactName"
            component="span"
            className={css.errorMssg}
          />
        </div>
        <div className={css.formBox}>
          <label className={css.formLabel}>Number</label>
          <Field
            className={css.formInput}
            type="number"
            name="phoneNumber"
            id={phoneNumberId}
            placeholder="Enter phone number"
          />
          <ErrorMessage
            name="phoneNumber"
            component="span"
            className={css.errorMssg}
          />
        </div>
        <button className={css.formButton} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
