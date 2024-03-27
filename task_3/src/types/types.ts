export type FormValuesType = {
  email: string;
  name: string;
  country: string;
  address: string;
  payment: 'On Site' | 'Credit Card';
};

export type ErrorType = {
  email: string;
  name: string;
  country: string;
  address: string;
  payment: string;
};
