import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  });

  const { firstName, lastName, email, occupation, city, bio } = form;
  const values = { firstName, lastName, email, occupation, city, bio };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setForm({ ...form, [input]: e.target.value });
  };
  // eslint-disable-next-line default-case
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} values={values} prevStep={prevStep} />
      );
    case 4:
      return <Success />;
  }
};

export default UserForm;
