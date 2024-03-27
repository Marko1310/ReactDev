import { ErrorType, FormValuesType } from '../types/types';

const getFormErrors = function (formData: FormValuesType) {
  const errors: ErrorType = {
    email: '',
    name: '',
    country: '',
    address: '',
    payment: '',
  };
  if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!formData.name || formData.name.length < 2) {
    errors.name = 'Username must be at least 2 characters long';
  }
  if (!formData.address || formData.address.length < 3) {
    errors.address = 'Address must be at least 3 characters long';
  }

  return errors;
};

export default getFormErrors;
