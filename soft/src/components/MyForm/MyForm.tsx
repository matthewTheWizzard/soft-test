import { FC } from 'react';
import { Form, Field } from 'react-final-form';
import { PaymentInfo, Condition, Tooltip } from '../../components';
import { MROT_TOOLTIP } from '../../constants';
import { dEformatMoneyInput, formatMoneyInput } from '../../utils';
import F from 'react-bootstrap/Form';
import './MyForm.scss';

const MyForm: FC = () => {
  const onSubmit = () => {
    return;
  };

  const showCurrency = (value: string): string => {
    switch (value) {
      case 'day':
        return `₽ в день`;
      case 'hour':
        return `₽ в час`;
      default:
        return `₽`;
    }
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
                id="check_month"
              />
              <label htmlFor="check_month" className="label">Оклад за месяц</label>
            </div>
            <div className="form-check">
              <Field
                className="checkbox"
                name="payment"
                value="mrot"
                component="input"
                type="radio"
                id="check_mrot"
              />
              <label htmlFor='check_mrot' className="label">МРОТ</label>
              <Tooltip>{MROT_TOOLTIP}</Tooltip>
            </div>
            <div className="form-check">
              <Field
                className="checkbox"
                name="payment"
                value="day"
                component="input"
                type="radio"
                id="check_day"
              />
              <label htmlFor='check_day' className="label">Оплата за день</label>
            </div>
            <div className="form-check">
              <Field
                className="checkbox"
                name="payment"
                value="hour"
                component="input"
                type="radio"
                id="check_hour"
              />
              <label htmlFor="check_hour" className="label">Оплата за час</label>
            </div>
            <Condition when="payment" is="mrot" not={true}>
              <>
                <div className="form-switch-container">
                  <span>Указать с НДФЛ</span>
                  <div className="form-check form-switch">
                    <Field
                      className="form-check-input switch-custom"
                      name="tax"
                      component="input"
                      type="checkbox"
                    />
                    <span className="form-check-label">Без НДФЛ</span>
                  </div>
                </div>
                <div className="form-check currency">
                  <Field
                    name="money"
                    component="input"
                    type="text"
                    parse={formatMoneyInput}
                    maxLength={10}
                  />
                  <F.Label>{showCurrency(values.payment)}</F.Label>
                </div>
              </>
            </Condition>
            <Condition when="payment" is="month">
              <PaymentInfo requestSalary={dEformatMoneyInput(values.money)} tax={values.tax} />
            </Condition>
          </fieldset>
        </form>
      )}
    />
  );
};

export { MyForm };
