import InputRadio from './UI/InputRadio';
import Title from './UI/Title';

type PaymentProps = {
  paymentType: 'On Site' | 'Credit Card';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Payment({ paymentType, onChange }: PaymentProps) {
  return (
    <div className="flex flex-col">
      <Title title="Payment" />
      <InputRadio
        name="payment"
        paymentType={paymentType}
        value="On Site"
        label="On Site"
        onChange={onChange}
      />

      <InputRadio
        name="payment"
        paymentType={paymentType}
        value="Credit Card"
        label="Credit Card"
        onChange={onChange}
      />
    </div>
  );
}

export default Payment;
