import { FC } from 'react';
import { CURRENCY_RUB } from '../../constants';
import { calculateEmployeeConditions } from '../../utils';

type PaymentInfoType = {
  requestSalary: number;
  tax: boolean;
};

const PaymentInfo: FC<PaymentInfoType> = ({ requestSalary, tax }) => {
  const salary = calculateEmployeeConditions(tax, requestSalary, 13);

  return (
    <div>
      <p>
        <b>
          {requestSalary ? salary.salary : 0} {CURRENCY_RUB}
        </b>{' '}
        сотрудник будет получать на руки
      </p>
      <p>
        <b>
          {requestSalary ? salary.tax : 0} {CURRENCY_RUB}
        </b>{' '}
        НДФЛ, 13% от оклада
      </p>
      <p>
        <b>
          {requestSalary ? salary.budget : 0} {CURRENCY_RUB}
        </b>{' '}
        за сотрудника в месяц
      </p>
    </div>
  );
};

export { PaymentInfo };
