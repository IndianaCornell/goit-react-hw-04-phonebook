import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import {
  StyledForm,
  ErrorMess,
  StyledLabel,
  FieldArea,
  StyledButton,
  ErrorP,
} from './ContactForm.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.number().required().positive().integer().min('5'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel>Name</StyledLabel>
          <FieldArea name="name" placeholder="Enter a name" />
          <ErrorMess
            name="name"
            component="div"
            render={msg => <ErrorP>Name is required</ErrorP>}
          />

          <StyledLabel>Number</StyledLabel>
          <FieldArea name="number" placeholder="Enter the number" />
          <ErrorMess
            name="number"
            component="div"
            render={msg => <ErrorP>Number must be a `number` type</ErrorP>}
          />

          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
