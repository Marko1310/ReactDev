import { FormValuesType } from '../App';

type ConfirmationProps = {
  formData: FormValuesType;
};

function Confirmation({ formData }: ConfirmationProps) {
  return (
    <div className="w-full bg-slate-50 p-2">
      <p className="mb-4 text-center text-lg font-bold text-green-600">
        Congratulations! ✅
      </p>
      <p className="mb-3">Your order details:</p>
      <div className="flex flex-col gap-2 pl-3">
        <p>Email: {formData.email}</p>
        <p>Name: {formData.name}</p>
        <p>Country: {formData.country}</p>
        <p>Address: {formData.address}</p>
        <p>Payment Type: {formData.payment}</p>
      </div>
    </div>
  );
}

export default Confirmation;
