import { useState } from 'react';
import Contact from './components/Contact';
import Address from './components/Address';
import Payment from './components/Payment';
import ConfirmButton from './components/ConfirmButton';
import Confirmation from './components/Confirmation';
import getFormErrors from './helpers/validateForm';
import { ErrorType, FormValuesType } from './types/types';

function App() {
  const [formData, setFormData] = useState<FormValuesType>({
    email: '',
    name: '',
    country: 'Croatia',
    address: '',
    payment: 'On Site',
  });

  const [errors, setErrors] = useState<ErrorType>({
    email: '',
    name: '',
    country: '',
    address: '',
    payment: '',
  });

  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = function () {
    const errors = getFormErrors(formData);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      if (!checked) {
        alert('Please confirm submission by checking the box.');
        return;
      } else {
        setSubmitted(true);
      }
    }
  };

  const onChange = function (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = function () {
    setChecked(!checked);
  };

  return (
    <div className="m-16 flex flex-col justify-center rounded-2xl bg-slate-200 p-8">
      <p className="text-xl font-semibold">Order Payment</p>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8 p-4">
        <Contact
          email={formData.email}
          onChange={onChange}
          errorEmail={errors.email}
        />
        <Address
          name={formData.name}
          country={formData.country}
          address={formData.address}
          onChange={onChange}
          errorName={errors.name}
          errorAddress={errors.address}
        />
        <Payment paymentType={formData.payment} onChange={onChange} />
        <ConfirmButton
          checked={checked}
          handleCheckBoxChange={handleCheckboxChange}
        />

        <div className="flex w-full justify-center">
          <button className="w-40 rounded-xl bg-green-300 p-2">Order</button>
        </div>
      </form>
      {submitted && <Confirmation formData={formData} />}
    </div>
  );
}

export default App;
