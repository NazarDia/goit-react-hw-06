import css from './ContactForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      number: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = { id: nanoid(), ...values };
      onAddContact(newContact);
      resetForm();
    },
  });

  return (
    <form className={css.formContainer} onSubmit={formik.handleSubmit}>
      <div className={css.formBox}>
        <label className={css.formLabel}>Name</label>
        <input
          className={css.formInput}
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className={css.errorMssg}>{formik.errors.name}</div>
        )}
      </div>
      <div className={css.formBox}>
        <label className={css.formLabel}>Number</label>
        <input
          className={css.formInput}
          type="text"
          name="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />

        {formik.touched.number && formik.errors.number && (
          <div className={css.errorMssg}>{formik.errors.number}</div>
        )}
      </div>
      <button className={css.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};
export default ContactForm;
