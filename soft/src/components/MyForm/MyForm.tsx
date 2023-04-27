import { FC } from 'react';
import { Form, Field } from 'react-final-form';
import { PaymentInfo, Condition, Tooltip } from '../../components';
import { CURRENCY_RUB, MROT_TOOLTIP } from '../../constants';
import F from 'react-bootstrap/Form';
import './MyForm.scss';

const MyForm: FC = () => {
  const onSubmit = () => {
    return;
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ payment: 'month', tax: true }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend className="text-muted">Сумма</legend>
            <div className="form-check">
              <Field
                className="checkbox"
                name="payment"
                value="month"
                component="input"
                type="radio"
              />
              <label className="label">Оклад за месяц</label>
            </div>
            <div className="form-check">
              <Field
                className="checkbox"
                name="payment"
                value="mrot"
                component="input"
                type="radio"
              />
              <label className="label">МРОТ</label>
              <Tooltip>{MROT_TOOLTIP}</Tooltip>
            </div>
            <div className="form-check">
              <Field
                className="checkbox"
                name="payment"
                value="day"
                component="input"
                type="radio"
              />
              <label className="label">Оклад за день</label>
            </div>
            <div className="form-check">
              <Field
                className="checkbox"
                name="payment"
                value="hour"
                component="input"
                type="radio"
              />
              <label className="label">Оклад за час</label>
            </div>
            <div className="form-switch-container">
              <span>Указать с НДФЛ</span>
              <div className="form-check form-switch">
                <Field
                  className="form-check-input switch-custom"
                  name="tax"
                  component="input"
                  type="checkbox"
                />
                <F.Label className="form-check-label">Без НДФЛ</F.Label>
              </div>
            </div>
            <div>
              <Field name="money" component="input" type="number" />
              <F.Label> {CURRENCY_RUB}</F.Label>
            </div>
            <Condition when="payment" is="month">
              <PaymentInfo requestSalary={values.money} tax={values.tax} />
            </Condition>
          </fieldset>
        </form>
      )}
    />
  );
};

export { MyForm };
