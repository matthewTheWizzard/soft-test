import { FC } from 'react';
import { calculateEmployeeConditions } from '../../utils';
import { formatMoneyInput } from '../../utils';
import s from './PaymentInfo.module.scss';

type PaymentInfoType = {
  requestSalary: number;
  tax: boolean;
};

const PaymentInfo: FC<PaymentInfoType> = ({ requestSalary, tax }) => {
  const { budget, salary, percent } = calculateEmployeeConditions(tax, requestSalary, 13);

  return (
    <div className={s.bg}>
      <p>
        <b>{requestSalary ? formatMoneyInput(salary) : 0} ₽</b>{' '}
        <small>сотрудник будет получать на руки</small>
      </p>
      <p>
        <b>{requestSalary ? formatMoneyInput(percent) : 0} ₽</b>{' '}
        <small>НДФЛ, 13% от оклада</small>
      </p>
      <p>
        <b>{requestSalary ? formatMoneyInput(budget) : 0} ₽</b>{' '}
        <small>за сотрудника в месяц</small>
      </p>
    </div>
  );
};

export { PaymentInfo };
