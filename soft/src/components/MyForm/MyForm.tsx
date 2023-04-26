import { FC } from 'react';
import { Form, Field } from 'react-final-form';
import { PaymentInfo, Condition } from '../../components';
import { CURRENCY_RUB } from '../../constants';

const MyForm: FC = () => {
  const onSubmit = () => {
    return;
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ payment: "month", tax: true }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="payment"
              value="month"
              component="input"
              type="radio"
            />
            <label>Оклад за месяц</label>
          </div>
          <div>
            <Field name="payment" value="mrot" component="input" type="radio" />
            <label>МРОТ</label>
          </div>
          <div>
            <Field name="payment" value="day" component="input" type="radio" />
            <label>Оклад за день</label>
          </div>
          <div>
            <Field name="payment" value="hour" component="input" type="radio" />
            <label>Оклад за час</label>
          </div>
          <div>
            <label>Указать с НДФЛ</label>
            <Field name="tax" component="input" type="checkbox" />
            <label>Без НДФЛ</label>
          </div>
          <div>
            <Field name="money" component="input" type="number" />
            <label>{' '}{CURRENCY_RUB}</label>
          </div>
          <Condition when="payment" is="month">
            <PaymentInfo requestSalary={values.money} tax={values.tax}/>
          </Condition>
        </form>
      )}
    />
  );
};

export { MyForm };
