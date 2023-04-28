import { FC } from 'react';
import { CURRENCY_RUB } from '../../constants';
import { calculateEmployeeConditions } from '../../utils';
import s from './PaymentInfo.module.scss';

type PaymentInfoType = {
  requestSalary: number;
  tax: boolean;
};

const PaymentInfo: FC<PaymentInfoType> = ({ requestSalary, tax }) => {
  const salary = calculateEmployeeConditions(tax, requestSalary, 13);

  return (
    <div className={s.bg}>
      <p>
        <b>
          {requestSalary ? salary.salary : 0} {CURRENCY_RUB}
        </b>{' '}
        <small>сотрудник будет получать на руки</small>
      </p>
      <p>
        <b>
          {requestSalary ? salary.tax : 0} {CURRENCY_RUB}
        </b>{' '}
        <small>НДФЛ, 13% от оклада</small>
      </p>
      <p>
        <b>
          {requestSalary ? salary.budget : 0} {CURRENCY_RUB}
        </b>{' '}
        <small>за сотрудника в месяц</small>
      </p>
    </div>
  );
};

export { PaymentInfo };
